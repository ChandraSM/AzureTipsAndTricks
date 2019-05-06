(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{374:function(e,t,s){"use strict";s.r(t);var o=s(43),n=Object(o.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/logic-apps/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Logic Apps Documentation"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"use-azure-logic-apps-to-detect-when-a-new-sql-record-is-inserted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-azure-logic-apps-to-detect-when-a-new-sql-record-is-inserted","aria-hidden":"true"}},[e._v("#")]),e._v(" Use Azure Logic Apps to Detect when a new SQL record is inserted")]),e._v(" "),s("p",[e._v("I recently needed the ability to detect when a new SQL record was added and send an email. Since the customer didn't want the existing logic in their app to be modified, I relied on Azure Logic Apps and all their powerful connectors.")]),e._v(" "),s("p",[e._v("In the portal, create a new "),s("strong",[e._v("Azure Logic App")]),e._v(" and then select "),s("strong",[e._v("Start with a blank template")]),e._v(". Under the trigger, choose "),s("strong",[e._v("New step > Add an action")]),e._v(".")]),e._v(" "),s("p",[e._v('In the search box, enter "sql" as your filter. and pick '),s("strong",[e._v("When an item is created")]),e._v(".")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/logicsql1.png")}}),e._v(" "),s("p",[e._v("You'll be prompted for connection details, so do so now.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/logicsql2.png")}}),e._v(" "),s("p",[e._v("Now you'll need to select the "),s("strong",[e._v("Table Name")]),e._v(" and how often you want to check for item. We are going to go with every 5 seconds.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/logicsql3.png")}}),e._v(" "),s("p",[e._v("Now choose, "),s("strong",[e._v("New step > Choose an action")]),e._v(".")]),e._v(" "),s("p",[e._v('In the search box, enter "email" as your filter. and pick '),s("strong",[e._v("Send an email")]),e._v(".")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/logicsql4.png")}}),e._v(" "),s("p",[e._v("Type the email address and select which fields to send. You can put custom text as shown below:")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/logicsql5.png")}}),e._v(" "),s("p",[e._v("Now insert a record into your database and it should fire (as long as you have the Logic app running)")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/logicsql6.png")}}),e._v(" "),s("p",[e._v("Easy enough!")])])},[],!1,null,null,null);t.default=n.exports}}]);