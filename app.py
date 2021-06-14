from flask import Flask, request
import json
import codecs
import requests
import logging
import sys
import pandas as pd
from requests.auth import HTTPBasicAuth
import base64
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__, static_url_path='/static')	

@app.route('/')
def main():
	f = codecs.open("index.html", 'r', 'utf-8')
	document = f.read()
	template = """{0}"""
	template = template.format(document)
	return template


## Get the token to get the session

def auth(username, baseUrl, password):
	
	finalToken = ""

	# Example: o8PzNmFj1g==
	encoded_c_s = ""

	url = baseUrl + "/SASLogon/oauth/token?grant_type=password&username=" + username + "&password=" + password

	payload = {}
	headers = {
	    "Content-Type" : "application/x-www-form-urlencoded",
	    "Accept": "application/json",
		"Authorization": "Basic " + encoded_c_s
	}

	try:
		finalToken = requests.request("GET", url, headers=headers, data = payload).json()["access_token"]
		return finalToken
	except requests.exceptions.RequestException as e: 
	    print(e)


## Create session to start making calls

def getSession(finalToken, host):
	headers_sesh = {
		    "Content-Type": "application/json",
		    "Authorization": "Bearer " + finalToken }

	url = host + ':8777/cas/sessions'
	
	try:
		r = requests.post(url, headers=headers_sesh).json()
		return r
	except requests.exceptions.RequestException as e:
		print(e)


## Load data from the form to be scored

def csv_load(sessionId, finalToken, host, data):

	url = host + ":8777/cas/sessions/"+sessionId+"/actions/upload"

	payload = "UID,Text\r\n"+data

	headers = {
		'Accept': 'application/json',
		'Content-Type': 'binary/octet-stream',
		'JSON-Parameters': '{"casout":{"caslib":"casuser","name":"tableToScore","replace":true},"importOptions":{"fileType":"csv"}}',
		'Authorization': 'Bearer '+ finalToken
	}

	
	try:
		response = requests.request("PUT", url, headers=headers, data = payload)
		# print(response.text.encode('utf8'))
		return str(response)
	except requests.exceptions.RequestException as e:
		print(e)


## Drop unused tables if needed

def cleanData(host, sessionId, finalToken, tblName):
	url = host + ":8777/cas/sessions/" + sessionId + "/actions/table.droptable"

	payload = "{ \"caslib\":\"casuser\", \"name\":\"" + tblName + "\"} }"
	headers = {
	  'Authorization': "Bearer " + finalToken,
	  'Content-Type': 'application/json'
	}
	try:
		response = requests.request("POST", url, headers=headers, data = payload).json()
		return response
	except requests.exceptions.RequestException as e:
		print(e)
		


## Run Concept Model

def callConceptModel(sessionId, finalToken, host, modelLib, modelTable):
	headers_sesh = {
			"Accept": "application/json",
		    "Content-Type": "application/json",
		    "Authorization": "Bearer " + finalToken }

	url = host + ':8777/cas/sessions/'+sessionId+'/actions/textRuleScore.applyConcept'

	payload = "{\"model\":{\"caslib\":\""+ modelLib +"\", \"name\":\""+ modelTable +"\"},\r\n\"table\":{\"caslib\":\"casuser\", \"name\":\"tableToScore\"},\r\n\"docId\":\"uid\",\r\n\"text\":\"text\",\r\n\"casOut\":{\"caslib\":\"casuser\", \"name\":\"out_concepts\", \"replace\":\"true\"},\r\n\"factOut\":{\"caslib\":\"casuser\", \"name\":\"out_facts\", \"replace\":\"true\"}}"

	try:
		r = requests.post(url, headers=headers_sesh, data=payload).json()
		return r
	except requests.exceptions.RequestException as e:
		print(e)


## Run Categories Model

def callCategoriesModel(sessionId, finalToken, host, modelLib, modelTable):
	headers_sesh = {
			"Accept": "application/json",
		    "Content-Type": "application/json",
		    "Authorization": "Bearer " + finalToken }

	url = host + ':8777/cas/sessions/'+sessionId+'/actions/textRuleScore.applyCategory'

	payload = "{\"model\":{\"caslib\":\""+ modelLib +"\", \"name\":\""+ modelTable +"\"},\r\n\"table\":{\"caslib\":\"casuser\", \"name\":\"tableToScore\"},\r\n\"docId\":\"uid\",\r\n\"text\":\"text\",\r\n\"casOut\":{\"caslib\":\"casuser\", \"name\":\"out_categories\", \"replace\":\"true\"},\r\n\"matchOut\":{\"caslib\":\"casuser\", \"name\":\"out_match\", \"replace\":\"true\"},\r\n\"modelOut\":{\"caslib\":\"casuser\", \"name\":\"out_model\", \"replace\":\"true\"}}"

	try:
		r = requests.post(url, headers=headers_sesh, data=payload).json()
		return r
	except requests.exceptions.RequestException as e:
		print(e)


## Run Sentiment Model

def callSentimentModel(sessionId, finalToken, host):
	headers_sesh = {
			"Accept": "application/json",
		    "Content-Type": "application/json",
		    "Authorization": "Bearer " + finalToken }

	url = host + ':8777/cas/sessions/'+sessionId+'/actions/sentimentAnalysis.applySent'

	payload = "{\"table\":{\"caslib\":\"casuser\", \"name\":\"tableToScore\"},\r\n\"docId\":\"uid\",\r\n\"text\":\"text\",\r\n\"language\":\"ENGLISH\",\r\n\"casOut\":{\"caslib\":\"casuser\", \"name\":\"sentimentAnalysis\", \"replace\":true}}"

	try:
		r = requests.post(url, headers=headers_sesh, data=payload).json()
		return r
	except requests.exceptions.RequestException as e:
		print(e)
	

## Get the data using the Fetch action

def getData(host, sessionId, finalToken, tblName):
	url = host + ":8777/cas/sessions/" + sessionId + "/actions/table.fetch"

	payload = "{ \"table\": {\"caslib\":\"casuser\", \"name\":\"" + tblName + "\"} }"
	headers = {
	  'Authorization': "Bearer " + finalToken,
	  'Content-Type': 'application/json'
	}
	try:
		response = requests.request("POST", url, headers=headers, data = payload).json()
		return(response)
	except requests.exceptions.RequestException as e:
		print(e)

def formatFetch(df):

	schema = df["Fetch"]["schema"]

	keys = []

	for key in schema:
		if key["label"] == "":
			keys.append("ID")	
		else:
			keys.append(key["label"])

	df_rows = pd.DataFrame(df["Fetch"]["rows"], columns=keys)
	df_rows.drop("ID",axis=1,inplace=True)

	# Return JSON
	# result = df_rows.to_json(orient="split")
	# parsed = json.loads(result)

	# Return HTML Table
	return(df_rows.to_html(classes="table table-striped table-dark",border=0, justify="left", index=False, index_names=False ))

@app.route('/process', methods=['POST'])
def view_do_something():
	
	if request.method == 'POST':

		# Text to be scored
		dt = request.json
		
		# Server Info
		username = dt["user"]
		host = dt["host"]
		password = dt["pwd"]

		# Model Info
		modelLib = dt["mLib"]
		categoriesModel = dt["ctgModel"]
		conceptsModel = dt["conModel"]

		# Get Token
		finalToken = auth(username, host, password)

		# Get Session
		sessionId = getSession(finalToken, host)

		# Upload Data
		unique_id = 12345
		text = dt["text"]
		parsedData = str(unique_id)+","+text

		# Load CSV
		csv_load(sessionId["session"], finalToken, host, parsedData)

		# Run Concepts Model
		concept_output = callConceptModel(sessionId["session"], finalToken, host, modelLib, conceptsModel)

		# Get concept  data
		concepts_data = getData(host, sessionId["session"], finalToken, "OUT_CONCEPTS")["results"]
		
		# Run Model
		sentiment_output = callSentimentModel(sessionId["session"], finalToken, host)

		# Get Sentiment data
		sentiment_data = getData(host, sessionId["session"], finalToken, "sentimentAnalysis")["results"]

		# Run Categories Model
		categories_output = callCategoriesModel(sessionId["session"], finalToken, host, modelLib, categoriesModel)

		# Get Categories Datas
		categories_data = getData(host, sessionId["session"], finalToken, "out_model")["results"]

		# Format data
		concept_format = formatFetch(concepts_data)
		sentiment_format = formatFetch(sentiment_data)
		categ_format = formatFetch(categories_data)

		# Clean Data - uncomment if you need to clean the data 
		# cleanData(host, sessionId["session"], finalToken, "tableToScore")
		# cleanData(host, sessionId["session"], finalToken, "OUT_FACTS")
		# cleanData(host, sessionId["session"], finalToken, "OUT_CONCEPTS")
		# cleanData(host, sessionId["session"], finalToken, "sentimentAnalysis")
		
		return("<p>Sentiment:</p>"+str(sentiment_format) + "<p>Concepts:</p>" + str(concept_format) + "<p>Categories:<p>" + str(categ_format))

	else:
		return "NOT OK"

if __name__ == '__main__':
	app.run()
	app.debug = True