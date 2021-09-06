var styles = `
#content > :not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4))   {
    display: none;
}

.newVF_header {
    display: flex;
    flex-direction: column-reverse;
}

.hero_left {
    min-width: 100%;
    -webkit-box-pack: center;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
}

.left_text {
    padding: 16px;
    max-width: 600px;
    z-index: 2;
    color: white;
}

.hero_background {
    background-image: url(https://cdn.vodafone.co.uk/en/assets/images/medium/IMG_Pro_Broadband_Affiliate_voucher.jpg);
    background-repeat: no-repeat;
    height: 250px;
    background-position: center;
    background-size: cover;
}

.hero_image {
    background-image: url(https://cdn.vodafone.co.uk/en/assets/images/extralarge/IMG_Pro_Broadband_Affiliate_voucher.jpg);
}

.hero_left {
    background-color: #333;
    color: #fff;
}

@media screen and (min-width: 601px) {
  .hero_background {
      height: 450px;

  }
}


@media screen and (min-width: 881px) {
  .newVF_header {
      display: flex;
      min-height: 432px;
      flex-direction: row;
  }

  .hero_left {
      max-width: 50%;
      -webkit-box-pack: center;
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      flex-direction: row;
      align-content: center;
      justify-content: flex-end;
      min-width: unset;
  }

  .left_text {
      padding: 64px 64px 64px 32px;
      max-width: 600px;
      z-index: 2;
      color: white;
  }


  .hero_background {
      position: absolute;
      height: 100%;
      width: 100%;
      flex: 1;
  }

  .hero_image {
      background-position: center center;
      background-size: cover;
      background-image: url(https://cdn.vodafone.co.uk/en/assets/images/extralarge/IMG_Pro_Broadband_Affiliate_voucher.jpg);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      height: 100%;
      width: 100%;
  }
}
`

var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

document.querySelectorAll('#content > div.vfuk-Controller__shadow > div > div > div > div:nth-child(1) > h2')[0].innerText = "Enter your postcode to see your exclusive broadband deal"
"Enter your postcode to see your exclusive broadband deal"

document.querySelectorAll(".vfuk-Section__section.bg-light1")[0].innerHTML = `  <div class="vfuk-Section__content">
    <div class="newVF_header">
      <div class="hero_left">
    <div class="left_text">
        <h1 class="vfuk-Heading__heading vfuk-Heading__heading-2 vfuk-Heading__inherit w-light ">Your exclusive £60 Amazon voucher with Vodafone Broadband</h1>
        <p class="vfuk-RawHtmlWrapper__typography ">Get a £60 Amazon voucher plus Superfast 2 for the price of Superfast 1</p>
        </div>
      </div>
      <div class="hero_background">
        <div class="hero_image" style="">
        </div>
      </div>
    </div>
  </div>`
