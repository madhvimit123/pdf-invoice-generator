const invoiceGenerator = require("./src/index");

invoiceGenerator.configure({
global: {
  logo:"https://vehiclesolutions.com.au/wp-content/uploads/2017/03/Vehicle-Solutions-logo.png",
  invoice_template: `${__dirname}/static/invoice.pug`,
  date: new Date(),
  date_format: "YY/MM/DD",
  lang: "en"
}
});

const invoice = invoiceGenerator.create();

invoice.recipient = {
title: "Ms",
first_name: "Anne",
last_name: "Haworth",
street1: "3/288 Glen Osmond Road",
street2: "FULLARTON SA 5063"
};
invoice.statement_conclusion = {
Employee: "1409",
"Payroll Id": "001409",
Phone: "8338 4427",
Email: "anne@vehiclesolutions.com.au"
};
invoice.statement_heading = {
subject: "Activity Statement",
subtitle: "Salary Packaging Statement for the period FBT year to date"
};
invoice.article_headers = [
"Name",
"Date",
"Ref",
"Inst#",
"Description",
"Debit",
"Credit",
"Balance"
];
invoice.articles = [
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
],
[
  "Payroll Deduction",
  "24/08/2017",
  "144102894",
  "1",
  "Deduction",
  "525.20",
  "",
  "526.21 Cr"
]
];

const options = {
timeout: "90000",
border: {
  top: "10px",
  right: "10px",
  bottom: "10px",
  left: "10px"
},
header: {
  height: "10mm",
  contents:
    '<div style="padding:5px 10px 5px 10px;"><div style="float:left;">Activity Statement</div><div style="float:right;"><span style="color:#444;font-size: 50%;">Print No.: ' +
    require("uuid/v4")() +
    "</span></div></div>"
},
footer: {
  height: "10mm",
  contents: {
    default:
      '<div style="padding:5px 10px 5px 10px;"><div style="float:left;"><span>Page {{page}}</span> of <span>{{pages}}</span>  <span style="color:#444;font-size: 50%;">Generated ' +
      new Date() +
      "</span></div></div>"
  }
}
};

invoice.template_configuration = {
  rows_in_first_page: 25,
  rows_per_pages: 43,
  rows_in_last_page: 43
};

let nbArticles = invoice.articles.length;
let loop = 1;
while (true) {
  if (loop === 1) {
    nbArticles -= invoice.template_configuration.rows_in_first_page;
    if (nbArticles <= 0) {
      invoice.template_configuration.loop_table = (invoice.template_configuration.rows_in_first_page !== invoice.template_rows_per_page ? 1 : 2);
      break;
    }
  }
  if (loop >= 2) {
    if (nbArticles <= invoice.template_configuration.rows_in_last_page) {
      invoice.template_configuration.loop_table = loop;
      break;
    }
    nbArticles -= invoice.template_configuration.rows_per_pages;
    if (nbArticles <= 0) {
      invoice.template_configuration.loop_table = loop;
      break;
    }
  }
  loop += 1;
}

invoice
.getInvoice()
.toPDF(options)
.toFile("./invoice.pdf")
.then(() => {
  console.log("file created.");
});

invoice
.getInvoice()
.toHTML()
.toFile("./invoice.html")
.then(() => {
  console.log("file created.");
});
