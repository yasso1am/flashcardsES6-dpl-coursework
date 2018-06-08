$(document).ready( function() {
  
  $('#newcard').on('click', () => {
    let newsubject = $('#subject').val()
    let newquestion = $('#question').val()
    let newanswer = $('#answer').val()
    let displaycards = $('#allthecards')
    let newcard = `<div id="card" class="row">
    <div class="col s12 m6">
      <div class='card small blue-grey darken-1'>
        <div class='card-content white-text'>
          <span class='card-title' id='card-subject'>${newsubject}</span>
          <span class='card-body'>${newquestion} </span>
          <span class='card-body hide'> ${newanswer} </span>
        </div>
        <div class='card-action'>
          <button class="flippy btn waves-effect waves-light"  name="action">See the answer
          <i class="material-icons right">send</i>
        </button>
        </div>
      </div>
    </div>
  </div>`

    displaycards.append(newcard)

    $(document).on('click', '.flippy', ({target}) => {
      let words = $(target).parent()
       let card = $(target).parent().parent().children().children('.card-body')
       card.toggleClass('hide')
    })

    // $(document).on('click', '.flippy', ({ target }) => {
    //   debugger
    //   const card = $(target).parent('.card')
    //   card.children('.card-body').toggleClass('hide')
    // })

    // $( '#flippy' ).on('click')
    // debugger
    // let card = $
    //  (this).toggleClass(function() {
    //   if ( $( this ).parent().is( "hide" ) ) {
    //     return "";
    //   } else {
    //     return "hide";
    //   }
    // });

    // $('#flippy').on('click', ({ target }) => { 
    //   const card = $(target).parent('.card-body')
    //   card.children('.c-body').toggleClass('hide')
    //   card.parent().addClass('animate')
    //   card.addClass('content-animate')
    //   setTimeout( () => {
    //     card.parent().removeClass('animate')
    //     card.removeClass('content-animate')
    //   }, 1000)

  })
})