import { SignatureData, DesignType } from "@/types/signature";

export const generateOutlookSignature = (
  data: SignatureData,
  design: DesignType
) => {
  const designs = {
    design1: `
    <table
  class="sig-cont"
  cellpadding="0"
  cellspacing="0"
  style="
    background-color: #000;
    color: #fff;
    border-radius: 15px;
    padding: 20px;
    width: 650px;
    background-image: url('https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/adon-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    font-family: Arial, sans-serif;
  "
>
  <tr style="vertical-align: top; height: 138px;">
    <td
      class="aog-logo"
      style="width: 35%; margin: 10px 10px 10px 30px; vertical-align: top; background-image:url('https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/adon-logo.png'); height:auto; background-repeat: no-repeat; background-size: center;
background-position: right bottom; background-size: 200px auto;"
    >
      <div style="width:100%"></div>
    </td>

    <td style="width: 65%; padding: 10px 10px 10px 50px; vertical-align: top;">
      <div
        class="name-position-cont"
        style="font-size: 21px; margin-bottom: 10px; padding-left:25px;"
      >
        <p style="line-height: 1.4; font-weight: 700; margin: 0;">
          ${data.name}
        </p>
        <p style="font-size: 12px; margin: 0;">${data.title}</p>
      </div>

      <div class="links-cont" style="line-height: 1.2;">
        ${
          data.phone
            ? `<div style="">
            <img
              src="https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/phone-call.png"
              style="width: 14px; height: 14px; margin-right: 8px; display: inline-block; vertical-align: middle;"
              alt="Phone"
            />
            <a
              href="tel:${data.phone}"
              style="font-size: 12px; color: #fff; text-decoration: none; display: inline-block; vertical-align: middle;"
            >
              ${data.phone}
            </a>
          </div>`
            : ""
        }

        ${
          data.website1
            ? `<div style="">
            <img
              src="https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/globe.png"
              style="width: 14px; height: 14px; margin-right: 8px; display: inline-block; vertical-align: middle;"
              alt="Website"
            />
            <a
              href="https://adongroup.com.au/"
              style="font-size: 12px; color: #fff; text-decoration: none; display: inline-block; vertical-align: middle;"
            >
              ${data.website1}
            </a>
          </div>`
            : ""
        }

        ${
          data.website2
            ? `<div style="">
            <img
              src="https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/globe.png"
              style="width: 14px; height: 14px; margin-right: 8px; display: inline-block; vertical-align: middle;"
              alt="Website"
            />
            <a
              href="https://adonworkforce.com.au/"
              style="font-size: 12px; color: #fff; text-decoration: none; display: inline-block; vertical-align: middle;"
            >
              ${data.website2}
            </a>
          </div>`
            : ""
        }
      </div>
    </td>
  </tr>
  <tr style="margin: 0; padding: 0; height: 100px">
      <td></td>
    </tr>
</table>`,

    adonsa: `
<table
  cellpadding="0"
  cellspacing="0"
  style="
    font-family: Arial, sans-serif;
    color: #ffffff;
    background-color: #000000;
    border-collapse: collapse;
    max-width: 650px;
    width: 100%;
    border-radius: 15px;
  "
>
  <tr>
    <td style="padding: 20px; border-radius: 15px;">
      <table cellpadding="0" cellspacing="0" width="100%">

        <!-- TOP SECTION: LEFT LOGO + DETAILS -->
        <tr>
          <!-- LEFT LOGO -->
          <td style="vertical-align: top; width: 40%; text-align: center;">
            <img
              src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/ADONSA-logo-1.png"
              alt="AOW SA logo"
              width="200"
              draggable="false"
              style="display: block; pointer-events: none;"
            />
          </td>

          <!-- RIGHT DETAILS -->
          <td style="vertical-align: top;">
            <table cellpadding="0" cellspacing="0" style="color: #ffffff;">

              <!-- NAME -->
              <tr>
                <td style="font-weight: bold; font-size: 16px;">
                  ${data.name || "Your Name"}
                </td>
              </tr>

              <!-- TITLE -->
              <tr>
                <td style="font-size: 13px; padding-bottom: 10px;">
                  ${data.title || "Your Position"}
                </td>
              </tr>

              <!-- CONTACT LINKS -->
              <tr>
                <td style="font-size: 12px; line-height: 20px;">

                  ${
                    data.phone
                      ? `
                        <a href="tel:${data.phone}" style="color: #ffffff; text-decoration: none;">
                          <img
                            src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/phone-call.fb194a64.png"
                            alt="Phone"
                            width="14"
                            draggable="false"
                            style="vertical-align: middle; display: inline-block; pointer-events: none;"
                          />
                          &nbsp;${data.phone}
                        </a><br />
                      `
                      : ""
                  }

                  ${
                    data.website1
                      ? `
                        <a href="${
                          data.website1
                        }" style="color: #ffffff; text-decoration: none;">
                          <img
                            src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/globe.005b6416.png"
                            alt="Website"
                            width="14"
                            draggable="false"
                            style="vertical-align: middle; display: inline-block; pointer-events: none;"
                          />
                          &nbsp;${data.website1
                            .replace("https://", "")
                            .replace("www.", "")}
                        </a><br />
                      `
                      : ""
                  }

                  ${
                    data.website2
                      ? `
                        <a href="${
                          data.website2
                        }" style="color: #ffffff; text-decoration: none;">
                          <img
                            src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/globe.005b6416.png"
                            alt="Website"
                            width="14"
                            draggable="false"
                            style="vertical-align: middle; display: inline-block; pointer-events: none;"
                          />
                          &nbsp;${data.website2
                            .replace("https://", "")
                            .replace("www.", "")}
                        </a>
                      `
                      : ""
                  }

                </td>
              </tr>

            </table>
          </td>
        </tr>


        <!-- DISCLAIMER -->
        <tr>
          <td colspan="2" style="
            padding-top: 10px;
            font-size: 9px;
            color: #ffffff;
            text-align: justify;
          ">
            This email, its contents and any attachments are strictly confidential.
            They must not be used, distributed, copied or read by any person other
            than the addressee. Unauthorised use, disclosure, copying or reliance on
            the contents of and attachments to this email by anyone other than the
            addressee may be unlawful. If you have received this email and attachments
            in error please contact us at Ad on Group immediately to facilitate its
            return.
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`,
    adonworkforce: `
    <table
  cellpadding="0"
  cellspacing="0"
  style="
    font-family: Arial, sans-serif;
    color: #ffffff;
    background-color: #000000;
    border-collapse: collapse;
    max-width: 650px;
    width: 100%;
    border-radius: 15px;
  "
>
  <tr>
    <td style="padding: 20px; border-radius: 15px;">
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="vertical-align: top; width: 60%; text-align: center;">
            <img
              src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/AOW-logo.ee764c1e.png"
              alt="AOW logo"
              width="330"
              draggable="false"
              style="
                display: block;
                pointer-events: none;
              "
            />
            <div
              style="
                font-weight: bold;
                font-size: 12px;
                margin-top: 5px;
                width: 330px;
              "
            >
              A division of Ad On Group
            </div>
          </td>

          <td style="vertical-align: top;">
            <table cellpadding="0" cellspacing="0" style="color: #ffffff;">
              <tr>
                <td style="font-weight: bold; font-size: 16px;">
                  ${data.name || "Your Name"}
                </td>
              </tr>
              <tr>
                <td style="font-size: 13px; padding-bottom: 10px;">
                  ${data.title || "Your Position"}
                </td>
              </tr>
              <tr>
                <td style="font-size: 12px; line-height: 20px;">

                  ${
                    data.phone
                      ? `<a href="tel:${data.phone}" style="color: #ffffff; text-decoration: none;">
                        <img
                          src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/phone-call.fb194a64.png"
                          alt="Phone"
                          width="14"
                          draggable="false"
                          style="
                            vertical-align: middle;
                            display: inline-block;
                            pointer-events: none;
                          "
                        />
                        &nbsp;${data.phone}
                      </a><br />`
                      : ""
                  }

                  ${
                    data.website1
                      ? `<a href="${
                          data.website1
                        }" style="color: #ffffff; text-decoration: none;">
                        <img
                          src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/globe.005b6416.png"
                          alt="Website"
                          width="14"
                          draggable="false"
                          style="
                            vertical-align: middle;
                            display: inline-block;
                            pointer-events: none;
                          "
                        />
                        &nbsp;${data.website1
                          .replace("https://", "")
                          .replace("www.", "")}
                      </a><br />`
                      : ""
                  }

                  ${
                    data.website2
                      ? `<a href="${
                          data.website2
                        }" style="color: #ffffff; text-decoration: none;">
                        <img
                          src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/globe.005b6416.png"
                          alt="Website"
                          width="14"
                          draggable="false"
                          style="
                            vertical-align: middle;
                            display: inline-block;
                            pointer-events: none;
                          "
                        />
                        &nbsp;${data.website2
                          .replace("https://", "")
                          .replace("www.", "")}
                      </a>`
                      : ""
                  }

                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td colspan="2" style="padding-top: 10px; font-size: 9px; color: #ffffff; text-align: justify;">
            This email, its contents and any attachments are strictly confidential.
            They must not be used, distributed, copied or read by any person other
            than the addressee. Unauthorised use, disclosure, copying or reliance on
            the contents of and attachments to this email by anyone other than the
            addressee may be unlawful. If you have received this email and attachments
            in error please contact us at Ad on Group immediately to facilitate its
            return.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`,
  };

  return designs[design].trim();
};

export const generateMondaySignature = (
  data: SignatureData,
  design: DesignType
) => {
  // For Monday, we'll use simplified versions that work well in their system
  const designs = {
    design1: `
    <table
  class="sig-cont"
  cellpadding="0"
  cellspacing="0"
  style="
    background-color: #000;
    color: #fff;
    border-radius: 15px;
    padding: 20px;
    width: 650px;
    background-image: url('https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/adon-bg2.png');
    background-repeat: no-repeat;
    background-position: center;
    font-family: Arial, sans-serif;
  "
>
  <tr style="vertical-align: top; height: 138px">
    <td
      class="aog-logo"
      style="
        width: 35%;
        margin: 10px 10px 10px 30px;
      "
    ></td>

    <td style="width: 65%; padding: 20px 10px 10px 50px; vertical-align: top">
      <div
        class="name-position-cont"
        style="font-size: 21px; margin-bottom: 10px; padding-left: 25px"
      >
        <p style="line-height: 1.4; font-weight: 700; margin: 0">
          ${data.name}
        </p>
        <p style="font-size: 12px; margin: 0">${data.title}</p>
      </div>

      <div class="links-cont" style="line-height: 1.2">
        <div style="">
          <img
            src="https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/phone-call.png"
            style="
              width: 14px;
              height: 14px;
              margin-right: 8px;
              display: inline-block;
              vertical-align: middle;
            "
            alt="Phone"
          />
          ${
            data.phone
              ? `
          <a
            href="tel:${data.phone}"
            style="
              font-size: 12px;
              color: #fff;
              text-decoration: none;
              display: inline-block;
              vertical-align: middle;
            "
          >
            ${data.phone}
          </a>`
              : ""
          }
        </div>
        ${
          data.website1
            ? `
        <div style="">
          <img
            src="https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/globe.png"
            style="
              width: 14px;
              height: 14px;
              margin-right: 8px;
              display: inline-block;
              vertical-align: middle;
            "
            alt="Website"
          />
          <a
            href="https://adongroup.com.au/"
            style="
              font-size: 12px;
              color: #fff;
              text-decoration: none;
              display: inline-block;
              vertical-align: middle;
            "
          >
            ${data.website1}
          </a>
        </div>`
            : ""
        }
        ${
          data.phone
            ? `
        <div style="">
          <img
            src="https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/globe.png"
            style="
              width: 14px;
              height: 14px;
              margin-right: 8px;
              display: inline-block;
              vertical-align: middle;
            "
            alt="Website"
          />
          <a
            href="https://adonworkforce.com.au/"
            style="
              font-size: 12px;
              color: #fff;
              text-decoration: none;
              display: inline-block;
              vertical-align: middle;
            "
            >${data.website2}
          </a>
        </div>`
            : ""
        }
      </div>
    </td>
  </tr>
  <tr style="margin: 0; padding: 0; height: 100px">
    <td></td>
  </tr>
</table>
`,

    adonsa: `
<table
  class="sig-cont"
  cellpadding="0"
  cellspacing="0"
  style="
    background-color: #000;
    color: #fff;
    border-radius: 15px;
    padding: 20px;
    max-width: 650px;
    width: 100%;
    background-image: url('https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/adon-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    font-family: Arial, sans-serif;
  "
>
  <tr style="vertical-align: top;">
    <td
      class="aog-logo"
      style="width: 35%; padding: 10px 10px 10px 20px; vertical-align: top;"
    >
      <img
        src="https://adongroup.com.au/wp-content/uploads/2024/12/AdonGroup.png"
        style="max-width: 100%; height: auto; display: block;"
        alt="Adon Group Logo"
      />
    </td>

    <td style="width: 45%; padding: 10px 10px 10px 0; vertical-align: top;">
      <div
        class="name-position-cont"
        style="font-size: 21px; margin-bottom: 10px;"
      >
        <p style="line-height: 1.4; font-weight: 700; margin: 0;">
          ${data.name}
        </p>
        <p style="font-size: 12px; margin: 0;">${data.title}</p>
      </div>

      <div class="links-cont" style="line-height: 1.2;">
        ${
          data.phone
            ? `<div style="">
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/phone-call.png"
              style="width: 14px; height: 14px; margin-right: 8px; display: inline-block; vertical-align: middle;"
              alt="Phone"
            />
            <a
              href="tel:${data.phone}"
              style="font-size: 12px; color: #fff; text-decoration: none; display: inline-block; vertical-align: middle;"
            >
              ${data.phone}
            </a>
          </div>`
            : ""
        }

        ${
          data.website1
            ? `<div style="">
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="width: 14px; height: 14px; margin-right: 8px; display: inline-block; vertical-align: middle;"
              alt="Website"
            />
            <a
              href="https://adongroup.com.au/"
              style="font-size: 12px; color: #fff; text-decoration: none; display: inline-block; vertical-align: middle;"
            >
              ${data.website1}
            </a>
          </div>`
            : ""
        }

        ${
          data.website2
            ? `<div style="">
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="width: 14px; height: 14px; margin-right: 8px; display: inline-block; vertical-align: middle;"
              alt="Website"
            />
            <a
              href="https://adonworkforce.com.au/"
              style="font-size: 12px; color: #fff; text-decoration: none; display: inline-block; vertical-align: middle;"
            >
              ${data.website2}
            </a>
          </div>`
            : ""
        }
      </div>
    </td>
    <td class="adon-qr" style="width: 25%; padding: 10px 0 0 0;">
      <img
          src="https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/adon-qr.png"
          style="width: 75%"
        />
      </td>
  </tr>
  <tr style="margin: 0; padding: 0; height: 80px">
      <td></td>
    </tr>
</table>`,
    adonworkforce: `<table cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; color: #ffffff; background-color: #000000; padding: 10px; border-collapse: collapse;">
  <tr>
    <td style="vertical-align: top; padding-right: 20px;">
      <img src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/AOW-logo.ee764c1e.png" alt="AOW logo" width="180" style="display: block;">
      <div style="font-weight: bold; font-size: 12px; margin-top: 5px;">A division of Ad On Group</div>
    </td>

    <td style="vertical-align: top;">
      <table cellpadding="0" cellspacing="0" style="color: #ffffff;">
        <tr>
          <td style="font-weight: bold; font-size: 16px;">Your Name</td>
        </tr>
        <tr>
          <td style="font-size: 13px; padding-bottom: 10px;">Your Position</td>
        </tr>
        <tr>
          <td style="font-size: 12px; line-height: 20px;">
            <a href="tel:07 5586 1400" style="color: #ffffff; text-decoration: none;">
              <img src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/phone-call.fb194a64.png" alt="Phone" width="14" style="vertical-align: middle;display: inline-block;"> 
              &nbsp;07 5586 1400
            </a>
            <br>
            <a href="https://www.adongroup.com.au" style="color: #ffffff; text-decoration: none;">
              <img src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/globe.005b6416.png" alt="Website" width="14" style="vertical-align: middle;display: inline-block; "> 
              &nbsp;www.adongroup.com.au
            </a>
            <br>
            <a href="https://www.adonworkforce.com.au" style="color: #ffffff; text-decoration: none;">
              <img src="https://amzn-hris-bucket.s3.ap-southeast-2.amazonaws.com/email-signature-assets/globe.005b6416.png" alt="Website" width="14" style="vertical-align: middle;display: inline-block; "> 
              &nbsp;www.adonworkforce.com.au
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td colspan="2" style="padding-top: 10px; font-size: 9px; color: #ffffff; text-align: justify;">
      This email, its contents and any attachments are strictly confidential. They must not be used, distributed, copied or read by any person other than the addresses. Unauthorised use, disclosure, copying or reliance on the contents of and attachments to this email by anyone other than the addresses may be unlawful. If you have received this email and attachments in error please contact us at Ad on Group immediately to facilitate its return.
    </td>
  </tr>
</table>
`,
  };

  return designs[design].trim();
};
