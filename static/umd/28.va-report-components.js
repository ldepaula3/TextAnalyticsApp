/*! License information is available at ../../LICENSE.txt and ../../LICENSE-3RD-PARTY.txt */(window["va-report-componentsJsonp"]=window["va-report-componentsJsonp"]||[]).push([[28],{199:function(t,e,o){"use strict";o.r(e);e.default={"Alerts.noAlerts.txt":()=>"ไม่ได้กำหนดการแจ้งเตือนสำหรับรายงานนี้","ComboBox.clearFilter.txt":()=>"ล้างตัวกรอง","ComboBox.defautValueNoData.fmt":({categoryValue:t})=>`${t} (ไม่มีข้อมูล)`,"ContextMenu.selectAll.txt":()=>"เลือกทั้งหมด","ContextMenu.clearSelection.txt":()=>"ล้างการเลือก","ContextMenu.exportImage.txt":()=>"ส่งออกเป็นภาพ","ContextMenu.sortAscending.fmt":({role:t})=>`${t}: น้อยไปมาก`,"ContextMenu.sortDescending.fmt":({role:t})=>`${t}: มากไปน้อย`,"ContextMenu.sortAddAscending.fmt":({role:t})=>`${t}: เพิ่มน้อยไปมาก`,"ContextMenu.sortAddDescending.fmt":({role:t})=>`${t}: เพิ่มมากไปน้อย`,"ContextMenu.removeSortItem.fmt":({role:t})=>`นำ ${t} ออกจากการเรียง`,"ContextMenu.removeSortLevel.txt":()=>"นำระดับการเรียงออก","ContextMenu.sort.txt":()=>"เรียงลำดับ","ContextMenu.selectShortestPath.txt":()=>"เลือกเส้นทางที่สั้นที่สุด","DrillableTooltip.drill.txt":()=>"ดูข้อมูล","DrillableTooltip.tooltip.txt":()=>"เคล็ดลับการใช้","DrillableTooltip.links.txt":()=>"ลิงก์","DrillableTooltip.section.link.fmt":({page:t})=>`ลิงค์หน้าไปยัง ${t}`,"DrillableTooltip.report.link.fmt":({report:t})=>`ลิงค์รายงานไปยัง ${t}`,"DrillableTooltip.external.link.fmt":({url:t})=>`ลิงค์ภายนอกไปยัง ${t}`,"DrillableTooltip.notAvailable.txt":()=>"ไม่พร้อมใช้งาน","Breadcrumb.all.fmt":({label:t})=>`ทั้งหมด ${t}`,"BrowserCheck.title.txt":()=>"ตรวจสอบ WebGL","BrowserCheck.msg.txt":()=>"WebGL ถูกปิดใช้งานหรือเบราว์เซอร์ของคุณไม่รองรับ   \nคลิกตกลงเพื่อดูรายงานในโปรแกรมดูแบบคลาสสิก","EmailUtil.subject.multiple.txt":()=>"รายงานสำหรับตรวจทาน","EmailUtil.tooLongEmail.txt":()=>"ความยาวของอีเมลเกินขีดจำกัด เลือกรายงานที่จะส่งอีเมลน้อยลง","HiddenSectionDialog.close.txt":()=>"ปิด","InfoPanel.information.txt":()=>"ข้อมูล","InfoPanel.comments.txt":()=>"ความคิดเห็น","InfoPanel.alerts.txt":()=>"การแจ้งเตือน","IncomingFilters.promptbars.txt":()=>"แถบพร้อมท์","Information.title.txt":()=>"ชื่อ","Information.name.txt":()=>"ชื่อ:","Information.description.txt":()=>"คำอธิบาย:","Information.displayRules.txt":()=>"กฎการแสดงผล:","Information.graphLevel.txt":()=>"ระดับกราฟ","Information.reportLevel.txt":()=>"ระดับรายงาน","Information.legend.txt":()=>"คำอธิบายแผนภูมิ","Information.incomingFilters.txt":()=>"ตัวกรองขาเข้า:","Information.noIncomingFilters.txt":()=>"ไม่มีตัวกรองขาเข้า","Information.dataSourceFilters.txt":()=>"ตัวกรองแหล่งข้อมูล:","Information.interactiveFilters.txt":()=>"ตัวกรองแบบอินเทอร์แอ็คทีฟ:","MobileContainer.mobileBIMessage.txt":()=>"เข้าถึงรายงาน SAS บนอุปกรณ์มือถือของคุณ","ObjectTypes.report.txt":()=>"รายงาน","ObjectTypes.Report.BI.txt":()=>"รายงาน SAS (2G)","ObjectTypes.Report.StoredProcess.txt":()=>"รายงานกระบวนการที่จัดเก็บไว้","ObjectTypes.StoredProcess.txt":()=>"กระบวนการที่จัดเก็บไว้","MissingValues.label.txt":()=>"(ค่าที่ขาดหายไป)","PromptContainer.apply.txt":()=>"นำไปใช้","PromptContainer.cancel.txt":()=>"ยกเลิก","TextFieldTypeAhead.validation.range.fmt":({min:t,max:e})=>`ค่าจะต้องเป็นตัวเลขที่มีค่าตั้งแต่ ${t} และ ${e} โดยรวม`,"TextFieldTypeAhead.validation.numeric.txt":()=>"ระบุค่าตัวเลขที่ถูกต้อง","TextFieldTypeAhead.validation.string.txt":()=>"ค่าไม่ถูกต้องสำหรับข้อมูลที่กำหนดไว้","TextFieldTypeAhead.categoryAndMeasureTooltip.fmt":({categoryLabel:t,measureLabel:e})=>`ป้อน: ${t}, ${e}`,"TextFieldTypeAhead.categoryTooltip.fmt":({categoryLabel:t})=>`ป้อน: ${t}`,"TextFieldTypeAhead.placeholder.fmt":({placeholderLabel:t})=>`ป้อน: ${t}…`,"RangeSlider.tooltip.fmt":({label:t,min:e,max:o})=>`${t}: ${e} - ${o}`,"PromptElement.categoryLabelValueAndMeasureLabelValueTooltip.fmt":({categoryLabel:t,categoryValue:e,measureLabel:o,measureValue:r})=>`${t}: ${e}, ${o}: ${r}`,"PromptElement.categoryLabelValueTooltip.fmt":({categoryLabel:t,categoryValue:e})=>`${t}: ${e}`,"ReportContainer.back.txt":()=>"ย้อนกลับ","ReportContainer.reportCorrupted.txt":()=>"รายงานเสียหาย","ReportContainer.themeLoadFailed.txt":()=>"ไม่สามารถโหลดธีมของรายงาน","ReportContainer.restoreButton.tip.txt":()=>"กู้คืนรายงาน","ReportContainer.restoreButtonAriaAnnounce.txt":()=>"รายงานกู้คืนแล้ว","ReportContainer.renderError.txt":()=>"เกิดข้อผิดพลาด ไม่สามารถแสดงรายงานได้","ReportContainer.component.renderError.txt":()=>"เกิดข้อผิดพลาด ไม่สามารถแสดงคอมโนเนนต์ได้","ReportContentPage.open.txt":()=>"เปิด…","ReportContentPage.refreshReport.txt":()=>"รีเฟรชรายงาน","ReportContentPage.editReport.txt":()=>"แก้ไขรายงาน","ReportContentPage.print.txt":()=>"พิมพ์…","ReportContentPage.email.txt":()=>"อีเมล…","ReportContentPage.export.txt":()=>"ส่งออกไปยัง Excel…","ReportContentPage.reportProperties.txt":()=>"คุณสมบัติรายงาน","ReportContentPage.shareReport.txt":()=>"แชร์รายงาน","ReportContentPage.enableOverlays.txt":()=>"เปิดใช้งานการวางซ้อนอ็อบเจ็กต์","ReportContentPage.disableOverlays.txt":()=>"ปิดใช้งานการวางซ้อนอ็อบเจ็กต์","ReportContentPage.link.txt":()=>"ลิงก์…","ReportContentPage.settings.txt":()=>"การตั้งค่า…","ReportContentPage.editPlayback.txt":()=>"แก้ไขการเล่น","ReportContentPage.playReport.txt":()=>"รายงานการเล่น","ReportContentPage.title.fmt":({reportTitle:t,currentSection:e})=>`${t} - ${e}`,"ReportContentPage.showFiltersButton.tip.txt":()=>"แสดงตัวกรองที่แจ้งเตือน","ReportContentPage.hideFiltersButton.tip.txt":()=>"ซ่อนตัวกรองที่แจ้งเตือน","ReportContentPage.reportFilters.txt":()=>"ระดับรายงาน","ReportContentPage.pageFilters.txt":()=>"ระดับหน้า","ReportContentPage.refreshRequired.txt":()=>"ไม่จำเป็นต้องรีเฟรชรายงาน","ReportContentPage.infoButton.tip.txt":()=>"แผงข้อมูล","ReportContentPage.backButton.tip.txt":()=>"ดูรายงานทั้งหมด","ReportContentPage.overflowMenuButton.tip.txt":()=>"ตัวเลือกเพิ่มเติม","ReportContentPage.itemGroupName.txt":()=>"รายงาน","ReportContentPage.linkNavigation.txt":()=>"การนำทางลิงก์","ReportContentPage.maximizeButton.tip.txt":()=>"ขยายรายงานใหญ่ที่สุด","ReportContentPage.closeButton.txt":()=>"ปิดรายงาน","ReportContentPage.maximizeButtonAriaAnnounce.txt":()=>"รายงานขยายใหญ่ที่สุด","ReportContentPage.resetReportState.txt":()=>"คืนค่าสถานะรายงานเริ่มต้น","ReportContentPage.summary.txt":()=>"แสดงบทสรุป","ReportManagerPage.objectMenu.open.txt":()=>"เปิด","ReportManagerPage.objectMenu.edit.txt":()=>"แก้ไข","ReportManagerPage.objectMenu.summary.txt":()=>"สรุป","ReportManagerPage.objectMenu.properties.txt":()=>"คุณสมบัติ","ReportManagerPage.objectMenu.email.txt":()=>"อีเมล…","ReportManagerPage.objectMenu.print.txt":()=>"พิมพ์","ReportManagerPage.browseReportsButton.txt":()=>"เรียกดูรายงาน","ReportManagerPage.newReportButton.txt":()=>"รายงานใหม่","ReportManagerPage.emptyView.message.txt":()=>"ไม่พบรายงาน","ReportManagerPage.emptyView.browseReportsButton.txt":()=>"เรียกดูรายงาน","ReportManagerPage.tableView.name.txt":()=>"ชื่อ","ReportManagerPage.tableView.author.txt":()=>"ผู้สร้าง","ReportManagerPage.tableView.lastModified.txt":()=>"เปลี่ยนแปลงล่าสุด","ReportManagerPage.openButton.tip.txt":()=>"เปิดรายงาน","ReportManagerPage.emailButton.tip.txt":()=>"รายงานทางอีเมล","ReportManagerPage.printButton.tip.txt":()=>"พิมพ์รายงานไปยัง PDF","ReportManagerPage.propertiesButton.tip.txt":()=>"คุณสมบัติรายงาน","ReportObject.multipleReferences.error.txt":()=>"ไม่สามารถใช้วัตถุรายงานในหลายบริบทได้","ReportObject.notFound.error.txt":()=>"ไม่พบชื่อวัตถุในรายงานที่ระบุ","ReportObject.invalidPage.error.txt":()=>"หน้าที่ระบุไม่ถูกต้อง","ReportPropertiesDialog.open.txt":()=>"เปิด","ReportPropertiesDialog.close.txt":()=>"ปิด","ReportPropertiesDialog.name.txt":()=>"ชื่อ:","ReportPropertiesDialog.description.txt":()=>"คำอธิบาย:","ReportPropertiesDialog.keywords.txt":()=>"คำหลัก:","ReportPropertiesDialog.type.txt":()=>"ประเภท:","ReportPropertiesDialog.location.txt":()=>"ตำแหน่งที่ตั้ง:","ReportPropertiesDialog.createdBy.txt":()=>"สร้างโดย:","ReportPropertiesDialog.dateCreated.txt":()=>"วันที่สร้าง:","ReportPropertiesDialog.modifiedBy.txt":()=>"เปลี่ยนแปลงโดย:","ReportPropertiesDialog.dateModified.txt":()=>"วันที่เปลี่ยนแปลง:","ReportSummaryDialog.title.txt":()=>"สรุป","ReportSummaryDialog.open.txt":()=>"เปิด","ReportSummaryDialog.cancel.txt":()=>"ยกเลิก","ReportSummaryDialog.close.txt":()=>"ปิด","ReportSummaryDialog.noSummary.txt":()=>"ไม่มีสรุป","ReportTileBody.modifiedBy.txt":()=>"เปลี่ยนแปลงโดย:","ReportTileBody.lastModified.txt":()=>"เปลี่ยนแปลงล่าสุด:","VAViewerSettingsProvider.reportViewer.txt":()=>"โปรแกรมดูรายงาน SAS","VAViewerSettingsProvider.reportRefreshSettings.txt":()=>"รีเฟรชรายงาน","VAViewerSettingsProvider.reportAutoRefresh.txt":()=>"รีเฟรชรายงานอัตโนมัติ","VAViewerSettingsProvider.reportRefreshFrequency.txt":()=>"ตรวจดูการอัพเดตหลังจากผ่านไปตามนาทีต่อไปนี้:","VAViewerSettingsProvider.alert.group.label.txt":()=>"การแจ้งเตือน","VAViewerSettingsProvider.alert.field.label.txt":()=>"เลือกการแจ้งเตือนเริ่มต้น:","VAViewerSettingsProvider.alert.email.txt":()=>"ส่งข้อความอีเมล","VAViewerSettingsProvider.alert.sms.txt":()=>"ส่งข้อความ SMS","VAViewerSettingsProvider.alert.system.txt":()=>"ค่าเริ่มต้นของผู้ดูแลระบบ","VAViewerSettingsProvider.generalSettings.txt":()=>"ธีม","VAViewerSettingsProvider.enableHighContrast.txt":()=>"แทนที่ธีมรายงานและใช้ธีมรายงาน SAS High Contrast","ViewerBusyDialog.openReport.txt":()=>"กำลังเปิดรายงาน…","ViewerBusyDialog.prepareExport.txt":()=>"กำลังเตรียมการส่งออก…","ViewerBusyDialog.preparePrint.txt":()=>"กำลังเตรียมการพิมพ์…","PDFGeneration.printingReport.txt":()=>"สร้างรายงาน จะดาวน์โหลดเมื่อพร้อม","PDFGeneration.fileName.fmt":({fileName:t,date:e})=>`${t} เปิด ${e}`,"VisualElementActionUtil.actionMenuLabel.txt":()=>"เลือกการดำเนินการ","VisualElementActionUtil.hierarchyExhausted.txt":()=>"คุณถึงลำดับชั้นต่ำสุดแล้ว","VisualElementActionUtil.hierarchiesExhausted.txt":()=>"คุณถึงลำดับชั้นต่ำสุดแล้ว","VisualElementActionUtil.drillLabel.fmt":({value:t})=>`เจาะเข้าไปใน ${t}`,"SaveImageUtil.snapshot.fmt":({a0:t,a1:e,a2:o})=>`สแนปช็อตของ ${t} ${e} ที่ ${o}`,"ObjectToolbarIcon.SaveImageTooltip.txt":()=>"บันทึกภาพ","ObjectToolbarIcon.PrintObject.txt":()=>"พิมพ์วัตถุ…","ObjectToolbarIcon.ShareObject.txt":()=>"แชร์อ็อบเจ็กต์…","ObjectToolbarIcon.Accelerator.txt":()=>"ดูด้วย SAS® Graphics Accelerator","ReportXMLDialog.title.txt":()=>"รายงาน XML","ReportXMLDialog.closeButton.txt":()=>"ปิด","ReportXMLDialog.copyButton.txt":()=>"คัดลอกไปยังคลิปบอร์ด","ReportXMLDialog.error.txt":()=>"เกิดข้อผิดพลาดในการโหลดรายงาน XML","ErrorDialog.error.txt":()=>"เกิดข้อผิดพลาด โปรดติดต่อผู้ดูแลระบบของคุณ","Application.banner.txt":()=>"SAS® Report Viewer","Application.wip.banner.txt":()=>"SAS® Visual Analytics - โปรแกรมดูรายงาน","Application.productName.txt":()=>"SAS® Visual Analytics","OpenReportDialog.title.txt":()=>"เปิดรายงาน","OpenReportDialog.reports.txt":()=>"รายงาน:","OpenReportDialog.cancel.txt":()=>"ยกเลิก","OpenReportDialog.ok.txt":()=>"ตกลง","AriaLive.numberOfObjectsUpdated.fmt":({count:t})=>`อ็อบเจ็กต์ที่อัปเดตแล้ว ${t} รายการ`,"AriaLive.oneObjectUpdated.txt":()=>"อ็อบเจ็กต์ที่อัปเดตแล้ว 1 รายการ","AriaLive.reportOpened.txt":()=>"เปิดรายงานแล้ว","AriaLive.reportClosed.txt":()=>"ปิดรายงานแล้ว","ExportData.generating.txt":()=>"สร้างการส่งออก จะดาวน์โหลดเมื่อพร้อม","ExportData.warning.txt":()=>"เกิดข้อผิดพลาดในการสร้างข้อมูล","ExportData.nodata.txt":()=>"ไม่มีข้อมูลที่จะส่งออก","ExportData.exportData.txt":()=>"ส่งออกข้อมูล…","PlaybackAnimationDialog.saveButton.txt":()=>"บันทึก","PlaybackAnimationDialog.cancelButton.txt":()=>"ยกเลิก","PlaybackAnimationDialog.playButton.txt":()=>"รายงานการเล่น","PlaybackAnimationDialog.title.txt":()=>"แก้ไขการเล่น","PlaybackAnimationDialog.transitionUnit.label.txt":()=>"หน่วยการเปลี่ยน:","PlaybackAnimationDialog.transitionUnit.page.txt":()=>"หน้า","PlaybackAnimationDialog.transitionUnit.object.txt":()=>"วัตถุ","PlaybackAnimationDialog.secondsPerUnit.label.txt":()=>"วินาทีต่อหน่วย:","PlaybackAnimationDialog.showMaximized.label.txt":()=>"แสดงวัตถุที่มีขนาดใหญ่ที่สุด:","PlaybackAnimationDialog.showCanvasOnly.label.txt":()=>"แสดงแคนวาสเท่านั้น:","PlaybackAnimationDialog.showTimer.label.txt":()=>"แสดงตัวตั้งเวลา:","PlaybackAnimationDialog.showNavigationControls.label.txt":()=>"แสดงการควบคุมการนำทางเมื่อคลิกหรือสัมผัส:","PlaybackNavigationControls.previousPage.txt":()=>"หน้าก่อนหน้านี้","PlaybackNavigationControls.nextPage.txt":()=>"หน้าถัดไป","PlaybackNavigationControls.previousObject.txt":()=>"อ็อบเจ็กต์ก่อนหน้านี้","PlaybackNavigationControls.nextObject.txt":()=>"อ็อบเจ็กต์ถัดไป","TransportConnection.generateReportTimeout.txt":()=>"ใช้เวลาในการโหลดรายงานนาน คุณต้องการดำเนินการต่อหรือไม่","TransportConnection.openReport.txt":()=>"เปิดรายงาน","ViewerContainer.reportNotFound.fmt":({location:t})=>`ไม่มีรายงานที่ระบุในที่ตั้งต่อไปนี้: ${t}`,"Hierarchy.expand.fmt":({label:t})=>`ขยาย ${t}`,"Hierarchy.collapse.fmt":({label:t})=>`ยุบ ${t}`,"GraphElementDecorator.overview.txt":()=>"ภาพรวม","CompositeGraphElementDecorator.hideOverview.txt":()=>"ซ่อนภาพรวม","CompositeGraphElementDecorator.showOverview.txt":()=>"แสดงภาพรวม","token.closeIcon.tooltip.txt":()=>"ลบ","token.grouptoken.moreoption.label.txt":()=>"เพิ่มเติม...","token.grouptoken.moreoptionheader.label.fmt":({count:t})=>`${t} รายการแรก:`,"token.grouptoken.ariaLabel.fmt":({name:t,count:e})=>`${t}, จำนวนของรายการในกลุ่ม: ${e}`,"token.grouptoken.closeIcon.tooltip.txt":()=>"นำกลุ่มออก","token.grouptoken.countlabel.fmt":({count:t})=>`(${t})`,"token.prevButton.tooltip.txt":()=>"เลื่อนไปยังรายการข้อมูลก่อนหน้า","token.nextButton.tooltip.txt":()=>"เลื่อนไปยังรายการข้อมูลถัดไป","token.menu.tooltip.txt":()=>"รายการ","token.menuItem.customtooltip.fmt":({value:t})=>`นำ ${t} ออก`,"token.menuItem.customAriaLabel.fmt":({value:t})=>`${t}, กดปุ่ม ลบ เพื่อลบรายการ`,"token.containeritems.label.txt":()=>"รายการ","token.grouptoken.menu.desc.txt":()=>". กด ช่องว่าง เพื่อเปิดใช้งานเมนู จากนั้นเคลื่อนที่ด้วยปุ่มลูกศร","SectionSelectionBar.noSelections.txt":()=>"ไม่มีรายการที่เลือก","SectionSelectionBar.title.txt":()=>"ตัวกรอง:"}}}]);
//# sourceMappingURL=28.va-report-components.js.map