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
  width="100%"
  style="
    background-color: #000;
    color: #fff;
    border-radius: 15px;
    padding: 20px;
    width: auto;
    max-width: 650px;
    background-image: url('https://raw.githubusercontent.com/noucodes/adon-email/refs/heads/main/public/adon-bg.png');
    background-repeat: no-repeat;
    background-position: contain;
    font-family: Arial, sans-serif;
  "
>
  <tr style="vertical-align: top;">
    <td
      class="aog-logo"
      style="width: 270px; padding: 10px 10px 10px 20px; vertical-align: top;"
    >
    </td>

    <td style="width: 60%; padding: 20px 10px 10px 0; vertical-align: top;">
      <div
        class="name-position-cont"
        style="font-size: 1.4em; margin-bottom: 10px;"
      >
        <p style="line-height: 1.2; font-weight: 700; margin: 0;">
          ${data.name}
        </p>
        <p style="font-size: .5em; margin: 0;">${data.title}</p>
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
              style="font-size: .8em; color: #fff; text-decoration: none; display: inline-block; vertical-align: middle;"
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
              style="font-size: .8em; color: #fff; text-decoration: none; display: inline-block; vertical-align: middle;"
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
              style="font-size: .8em; color: #fff; text-decoration: none; display: inline-block; vertical-align: middle;"
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

    design2: `
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

    <td style="width: 65%; padding: 10px 10px 10px 0; vertical-align: top;">
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
  </tr>
  <tr style="margin: 0; padding: 0; height: 80px">
      <td></td>
    </tr>
</table>`,

    design2: `
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
  };

  return designs[design].trim();
};
