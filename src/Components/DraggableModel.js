import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Toast } from 'react-toastify';
// import 'react-toastify/dist/react-toastify.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const DraggableModel = () => {

  // Login

  // const Login = () => {
  const [email, setEmail] = React.useState('');
  const [promocode, setPromocode] = React.useState('');
  const handlelogin = async () => {
    let result = await fetch("http://68.178.172.171:8282/besstMainApi/df/validatePromoCode", {
      method: 'post',
      body: JSON.stringify({ email, promocode }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result)
    if (result.name) {
      localStorage.setItem('', JSON.stringify(result));
    } else {
      alert("please enter connect details")

    }
  }



  // ---

  const [show, setShow] = useState(true);
  var hideclass = show ? "show" : "hide";

  function toggleShow() {
    setShow(!show);
  }


  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.Event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.Event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  function hideElement() {
    document.getElementById("mydiv").display = "none";
  }

  useEffect(() => {
    dragElement(document.getElementById("mydiv"))
  });



  // toast
  //   var myToastEl = document.getElementById('myToast')
  // myToastEl.addEventListener('hidden.bs.toast', function () {
  //   toast.hide()
  // })


  return (
    <>
      <section responsive={responsive}>
        <div id="mydiv" className={hideclass} style={{ top: "231px", left: "843px" }}>
          <span onClick={toggleShow} class="close">&times;</span>
          <div id="mydivheader">
            <h2 class="h2_head">Have a promo code?</h2>
            <h4 class="h4_head">Enjoy exclusive Offer</h4>
          </div>
          <div class="card-body">
            <Form action="/action_page.php">
              <input type="email" id="fname" class="input_f" name="fname" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
              <br /> <br />
              <input type="text" id="lname" class="input_f" name="lname" placeholder='Enter promo code' onChange={(e) => setPromocode(e.target.value)} value={promocode} />
              <br /> <br />
              <input onClick={handlelogin} type="button" class='btn_sub' value="Submit" />
            </Form>
          </div>
        </div>
        {/* toast  */}
        <div class="myToast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            {/* <img src="..." class="rounded me-2" alt="..." /> */}
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" onClick="hidden.bs.toast" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </section>
    </>
  )
}

export default DraggableModel;



