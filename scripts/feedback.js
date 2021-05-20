function feedbackSubmission() {
    var returnData = "<div class=\"col-lg-11 row text-center mt-5\"><h2>Thank you for your valuable feedback.</h2></div>";
    document.getElementById("feedbackDataDiv").style.display = "none";
    document.getElementById("mainDataDiv").innerHTML = returnData;
  }