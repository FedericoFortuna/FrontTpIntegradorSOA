$(document).ready(function() {
    $('#submit').click(function() {
      var comboboxValue = $('#combobox').val();
      var inputTextValue = $('#inputText').val();
      $.ajax({
        url: 'localhost:8083/task',
        type: 'POST',
        data: {
          comboboxValue: comboboxValue,
          inputTextValue: inputTextValue
        },
        success: function(data) {
          console.log(data);
          $('#inputResult').val(data);
        },
        error: function(error) {
          console.log(error);
        }
      });
    });
    $('#getResult').click(function() {
      var comboboxValue = $('#combobox').val();
      var inputTextValue = $('#inputText').val();
      $.ajax({
        url: "http://localhost:8083/task/{tareaid}",
        type: 'GET',
        success: function(data) {
          console.log(data);
          $('#inputResult').val(data);
        },
        error: function(error) {
          console.log(error);
        }
      });
    });
  });
