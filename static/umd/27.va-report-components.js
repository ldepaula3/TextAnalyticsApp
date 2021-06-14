/*! License information is available at ../../LICENSE.txt and ../../LICENSE-3RD-PARTY.txt */(window["va-report-componentsJsonp"]=window["va-report-componentsJsonp"]||[]).push([[27],{198:function(t,e,r){"use strict";r.r(e);e.default={"Alerts.noAlerts.txt":()=>"Inga aviseringar är inställda för den här rapporten.","ComboBox.clearFilter.txt":()=>"Rensa filter","ComboBox.defautValueNoData.fmt":({categoryValue:t})=>`${t} (inga data)`,"ContextMenu.selectAll.txt":()=>"Välj alla","ContextMenu.clearSelection.txt":()=>"Avmarkera","ContextMenu.exportImage.txt":()=>"Exportera som bild","ContextMenu.sortAscending.fmt":({role:t})=>`${t}: Stigande`,"ContextMenu.sortDescending.fmt":({role:t})=>`${t}: Fallande`,"ContextMenu.sortAddAscending.fmt":({role:t})=>`${t}: Lägg till stigande`,"ContextMenu.sortAddDescending.fmt":({role:t})=>`${t}: Lägg till fallande`,"ContextMenu.removeSortItem.txt":({role:t})=>`Ta bort ${t} från sortering`,"ContextMenu.removeSortLevel.txt":()=>"Ta bort sorteringsnivå","ContextMenu.sort.txt":()=>"Sortera","ContextMenu.selectShortestPath.txt":()=>"Välj kortaste väg","DrillableTooltip.drill.txt":()=>"BORRA","DrillableTooltip.tooltip.txt":()=>"FUNKTIONSBESKRIVNING","DrillableTooltip.links.txt":()=>"LÄNKAR","DrillableTooltip.section.link.fmt":({page:t})=>`Sidlänk till ${t}`,"DrillableTooltip.report.link.fmt":({report:t})=>`Rapportlänk till ${t}`,"DrillableTooltip.external.link.fmt":({url:t})=>`Extern länk till ${t}`,"DrillableTooltip.notAvailable.txt":()=>"Inte tillgänglig","Breadcrumb.all.fmt":({label:t})=>`Alla ${t}`,"BrowserCheck.title.txt":()=>"WebGL-kontroll","BrowserCheck.msg.txt":()=>"WebGL är antingen inaktiverat eller stöds inte av din webbläsare.   \nKlicka på OK för att visa rapporten i den klassiska vyn.","EmailUtil.subject.multiple.txt":()=>"Rapporter för granskning","EmailUtil.tooLongEmail.txt":()=>"E-postmeddelandet överstiger maxgränsen. Välj färre rapporter som ska skickas via e-post.","HiddenSectionDialog.close.txt":()=>"Stäng","InfoPanel.information.txt":()=>"Information","InfoPanel.comments.txt":()=>"Kommentarer","InfoPanel.alerts.txt":()=>"Aviseringar","IncomingFilters.promptbars.txt":()=>"Frågefält","Information.title.txt":()=>"Titel","Information.name.txt":()=>"Namn:","Information.description.txt":()=>"Beskrivning:","Information.displayRules.txt":()=>"Visningsregler:","Information.graphLevel.txt":()=>"Diagramnivå","Information.reportLevel.txt":()=>"Rapportnivå","Information.legend.txt":()=>"Förklaring","Information.incomingFilters.txt":()=>"Inkommande filter:","Information.noIncomingFilters.txt":()=>"Inga inkommande filter","Information.dataSourceFilters.txt":()=>"Datakällfilter:","Information.interactiveFilters.txt":()=>"Interaktiva filter:","MobileContainer.mobileBIMessage.txt":()=>"Öppna SAS-rapporter på din mobila enhet.","MobileContainer.mobileBIButton.txt":()=>"Använd SAS Mobile BI","ObjectTypes.report.txt":()=>"Rapport","ObjectTypes.Report.BI.txt":()=>"SAS-rapport (2G)","ObjectTypes.Report.StoredProcess.txt":()=>"Lagrad process-rapport","ObjectTypes.StoredProcess.txt":()=>"Lagrad process","MissingValues.label.txt":()=>"(saknade värden)","PromptContainer.apply.txt":()=>"Tillämpa","PromptContainer.cancel.txt":()=>"Avbryt","TextFieldTypeAhead.validation.range.fmt":({min:t,max:e})=>`Värdet måste vara ett tal mellan ${t} och ${e}.`,"TextFieldTypeAhead.categoryAndMeasureTooltip.fmt":({categoryLabel:t,measureLabel:e})=>`Ange: ${t}, ${e}`,"TextFieldTypeAhead.categoryTooltip.fmt":({categoryLabel:t})=>`Ange: ${t}`,"TextFieldTypeAhead.placeholder.fmt":({placeholderLabel:t})=>`Ange ${t}...`,"RangeSlider.tooltip.fmt":({label:t,min:e,max:r})=>`${t}: ${e} - ${r}`,"PromptElement.categoryLabelValueAndMeasureLabelValueTooltip.fmt":({categoryLabel:t,categoryValue:e,measureLabel:r,measureValue:a})=>`${t}: ${e}, ${r}: ${a}`,"PromptElement.categoryLabelValueTooltip.fmt":({categoryLabel:t,categoryValue:e})=>`${t}: ${e}`,"ReportContainer.back.txt":()=>"Bakåt","ReportContainer.reportCorrupted.txt":()=>"RAPPORT SKADAD","ReportContainer.themeLoadFailed.txt":()=>"Det gick inte att läsa in rapporttemat.","ReportContainer.restoreButton.tip.txt":()=>"Återställ rapport","ReportContainer.restoreButtonAriaAnnounce.txt":()=>"Rapport återställd","ReportContentPage.open.txt":()=>"Öppna...","ReportContentPage.refreshReport.txt":()=>"Uppdatera visningen av rapport","ReportContentPage.editReport.txt":()=>"Redigera rapport","ReportContentPage.print.txt":()=>"Skriv ut...","ReportContentPage.email.txt":()=>"Skicka...","ReportContentPage.export.txt":()=>"Exportera till Excel...","ReportContentPage.reportProperties.txt":()=>"Rapportegenskaper","ReportContentPage.shareReport.txt":()=>"Dela rapport","ReportContentPage.enableOverlays.txt":()=>"Aktivera objektöverlagringar","ReportContentPage.disableOverlays.txt":()=>"Inaktivera objektöverlagringar","ReportContentPage.link.txt":()=>"Länk...","ReportContentPage.settings.txt":()=>"Inställningar...","ReportContentPage.editPlayback.txt":()=>"Redigera uppspelning","ReportContentPage.playReport.txt":()=>"Spela upp rapport","ReportContentPage.title.fmt":({reportTitle:t,currentSection:e})=>`${t} - ${e}`,"ReportContentPage.showFiltersButton.tip.txt":()=>"Visa frågefilter","ReportContentPage.hideFiltersButton.tip.txt":()=>"Dölj frågefilter","ReportContentPage.reportFilters.txt":()=>"Rapportnivå","ReportContentPage.pageFilters.txt":()=>"Sidnivå","ReportContentPage.refreshRequired.txt":()=>"Rapportvisning måste uppdateras","ReportContentPage.infoButton.tip.txt":()=>"Informationspanel","ReportContentPage.backButton.tip.txt":()=>"Visa alla rapporter","ReportContentPage.overflowMenuButton.tip.txt":()=>"Fler alternativ","ReportContentPage.itemGroupName.txt":()=>"Rapporter","ReportContentPage.linkNavigation.txt":()=>"Länknavigering","ReportContentPage.maximizeButton.tip.txt":()=>"Maximera rapport","ReportContentPage.closeButton.txt":()=>"Stäng rapport","ReportContentPage.maximizeButtonAriaAnnounce.txt":()=>"Rapport maximerad","ReportContentPage.resetReportState.txt":()=>"Återställ standardinställt rapporttillstånd","ReportContentPage.summary.txt":()=>"Visa översikt","ReportManagerPage.objectMenu.open.txt":()=>"Öppna","ReportManagerPage.objectMenu.edit.txt":()=>"Redigera","ReportManagerPage.objectMenu.summary.txt":()=>"Översikt","ReportManagerPage.objectMenu.properties.txt":()=>"Egenskaper","ReportManagerPage.objectMenu.email.txt":()=>"Skicka...","ReportManagerPage.objectMenu.print.txt":()=>"Skriv ut","ReportManagerPage.browseReportsButton.txt":()=>"Bläddra bland rapporter","ReportManagerPage.newReportButton.txt":()=>"Ny rapport","ReportManagerPage.emptyView.message.txt":()=>"Inga rapporter hittades.","ReportManagerPage.emptyView.browseReportsButton.txt":()=>"Bläddra bland rapporter","ReportManagerPage.tableView.name.txt":()=>"Namn","ReportManagerPage.tableView.author.txt":()=>"Upphovsman","ReportManagerPage.tableView.lastModified.txt":()=>"Senast ändrad","ReportManagerPage.openButton.tip.txt":()=>"Öppna rapport","ReportManagerPage.emailButton.tip.txt":()=>"Skicka rapport","ReportManagerPage.printButton.tip.txt":()=>"Skriv ut rapport till PDF","ReportManagerPage.propertiesButton.tip.txt":()=>"Rapportegenskaper","ReportPropertiesDialog.open.txt":()=>"Öppna","ReportPropertiesDialog.close.txt":()=>"Stäng","ReportPropertiesDialog.name.txt":()=>"Namn:","ReportPropertiesDialog.description.txt":()=>"Beskrivning:","ReportPropertiesDialog.keywords.txt":()=>"Nyckelord:","ReportPropertiesDialog.type.txt":()=>"Typ:","ReportPropertiesDialog.location.txt":()=>"Plats:","ReportPropertiesDialog.createdBy.txt":()=>"Skapad av:","ReportPropertiesDialog.dateCreated.txt":()=>"Skapades:","ReportPropertiesDialog.modifiedBy.txt":()=>"Ändrad av:","ReportPropertiesDialog.dateModified.txt":()=>"Ändrades:","ReportSummaryDialog.title.txt":()=>"Översikt","ReportSummaryDialog.open.txt":()=>"Öppna","ReportSummaryDialog.cancel.txt":()=>"Avbryt","ReportSummaryDialog.close.txt":()=>"Stäng","ReportSummaryDialog.noSummary.txt":()=>"Ingen översikt är tillgänglig.","ReportTileBody.modifiedBy.txt":()=>"Ändrad av:","ReportTileBody.lastModified.txt":()=>"Senast ändrad:","VAViewerSettingsProvider.reportViewer.txt":()=>"SAS Report Viewer","VAViewerSettingsProvider.reportRefreshSettings.txt":()=>"Uppdatera visningen av rapport","VAViewerSettingsProvider.reportAutoRefresh.txt":()=>"Automatisk uppdatering av rapportvisning","VAViewerSettingsProvider.reportRefreshFrequency.txt":()=>"Sök efter uppdatering med följande minuters mellanrum:","VAViewerSettingsProvider.alert.group.label.txt":()=>"Aviseringsmeddelanden","VAViewerSettingsProvider.alert.field.label.txt":()=>"Välj standardtyp av aviseringsmeddelanden:","VAViewerSettingsProvider.alert.email.txt":()=>"Skicka e-postmeddelanden","VAViewerSettingsProvider.alert.sms.txt":()=>"Skicka SMS-meddelanden","VAViewerSettingsProvider.alert.system.txt":()=>"Administration - standard","VAViewerSettingsProvider.generalSettings.txt":()=>"Teman","VAViewerSettingsProvider.enableHighContrast.txt":()=>"Åsidosätt rapporttemat och använd i stället rapporttemat SAS High Contrast","ViewerBusyDialog.openReport.txt":()=>"Öppnar rapport...","ViewerBusyDialog.prepareExport.txt":()=>"Förbereder export...","ViewerBusyDialog.preparePrint.txt":()=>"Förbereder utskrift...","PDFGeneration.printingReport.txt":()=>"Genererar rapport-PDF. Den hämtas när den är klar.","PDFGeneration.fileName.fmt":({a0:t,a1:e})=>`${t} - ${e}`,"VisualElementActionUtil.actionMenuLabel.txt":()=>"Välj en åtgärd","VisualElementActionUtil.hierarchyExhausted.txt":()=>"Du har kommit till den lägsta nivån i hierarkin.","VisualElementActionUtil.hierarchiesExhausted.txt":()=>"Du har kommit till den lägsta nivån för alla hierarkier.","VisualElementActionUtil.drillLabel.fmt":({currentLevel:t,value:e})=>`Borra i ${t} (${e})`,"SaveImageUtil.snapshot.fmt":({a0:t,a1:e,a2:r})=>`Ögonblicksbild av ${t} ${e} - ${r}`,"ObjectToolbarIcon.SaveImageTooltip.txt":()=>"Spara bild","ObjectToolbarIcon.PrintObject.txt":()=>"Skriv ut objekt...","ObjectToolbarIcon.ShareObject.txt":()=>"Dela objekt...","ObjectToolbarIcon.Accelerator.txt":()=>"Visa med SAS® Graphics Accelerator","ReportXMLDialog.title.txt":()=>"Rapport-XML","ReportXMLDialog.closeButton.txt":()=>"Stäng","ReportXMLDialog.copyButton.txt":()=>"Kopiera till Urklipp","ReportXMLDialog.error.txt":()=>"Fel vid inläsning av rapport-XML","ErrorDialog.error.txt":()=>"Det uppstod ett fel. Kontakta systemansvarig.","Application.banner.txt":()=>"SAS® Report Viewer","Application.wip.banner.txt":()=>"SAS® Visual Analytics - Report Viewer","Application.productName.txt":()=>"SAS® Visual Analytics","OpenReportDialog.title.txt":()=>"Öppna rapport","OpenReportDialog.reports.txt":()=>"Rapporter:","OpenReportDialog.cancel.txt":()=>"Avbryt","OpenReportDialog.ok.txt":()=>"OK","AriaLive.numberOfObjectsUpdated.fmt":({count:t})=>`${t} objekt har uppdaterats`,"AriaLive.oneObjectUpdated.txt":()=>"1 objekt har uppdaterats","AriaLive.reportOpened.txt":()=>"Rapport öppnad","AriaLive.reportClosed.txt":()=>"Rapport stängd","ExportData.generating.txt":()=>"Genererar export. Den hämtas när den är klar.","ExportData.warning.txt":()=>"Fel vid generering av data","ExportData.nodata.txt":()=>"Inga data att exportera","ExportData.exportData.txt":()=>"Exportera data...","PlaybackAnimationDialog.saveButton.txt":()=>"Spara","PlaybackAnimationDialog.cancelButton.txt":()=>"Avbryt","PlaybackAnimationDialog.playButton.txt":()=>"Spela upp rapport","PlaybackAnimationDialog.title.txt":()=>"Redigera uppspelning","PlaybackAnimationDialog.transitionUnit.label.txt":()=>"Övergångsenhet:","PlaybackAnimationDialog.transitionUnit.page.txt":()=>"Sida","PlaybackAnimationDialog.transitionUnit.object.txt":()=>"Objekt","PlaybackAnimationDialog.secondsPerUnit.label.txt":()=>"Sekunder per enhet:","PlaybackAnimationDialog.showMaximized.label.txt":()=>"Visa maximerade objekt:","PlaybackAnimationDialog.showCanvasOnly.label.txt":()=>"Visa endast arbetsyta:","PlaybackAnimationDialog.showTimer.label.txt":()=>"Visa timer:","PlaybackAnimationDialog.showNavigationControls.label.txt":()=>"Visa navigeringskontroller genom att klicka eller peka:","PlaybackNavigationControls.previousPage.txt":()=>"Föregående sida","PlaybackNavigationControls.nextPage.txt":()=>"Nästa sida","PlaybackNavigationControls.previousObject.txt":()=>"Föregående objekt","PlaybackNavigationControls.nextObject.txt":()=>"Nästa objekt","TransportConnection.generateReportTimeout.txt":()=>"Det tar väldigt lång tid att läsa in rapporten. Vill du fortsätta?","TransportConnection.openReport.txt":()=>"Öppna rapport","ViewerContainer.reportNotFound.fmt":({location:t})=>`Den angivna rapporten finns inte på följande plats: ${t}`,"Hierarchy.expand.fmt":({label:t})=>`Expandera ${t}`,"Hierarchy.collapse.fmt":({label:t})=>`Komprimera ${t}`,"GraphElementDecorator.overview.txt":()=>"Översikt","CompositeGraphElementDecorator.hideOverview.txt":()=>"Dölj översikt","CompositeGraphElementDecorator.showOverview.txt":()=>"Visa översikt"}}}]);
//# sourceMappingURL=27.va-report-components.js.map