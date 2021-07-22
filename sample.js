jQuery($ => {
    for (let index = 1; index < 10; index++) {
      let $div = $("<div>").addClass("custom-control custom-switch");
      let $label = createLabel("toggle" + index);
      let $checkbox = createCheckbox("toggle" + index);
      $div.append($checkbox, $label);
      $("#container").append($div);
    }
    
    $('#container').on('change', ':checkbox', function() {
      let counter = $(':checkbox:checked').length;
      $('#text').text(counter);
    
      if (counter > 5)
        console.log("over  5")
      });
  });
  
  function createLabel(id) {
    return $(`<label for="${id}" class="custom-control-label">${id}&nbsp;</label>`);
  }
  
  function createCheckbox(id) {
    return $(`<input type="checkbox" class="custom-control-input" id="${id}" name="foo" value="${id}">`)
  }