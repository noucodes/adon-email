import { SignatureData, DesignType } from "@/types/signature";

export const generateOutlookSignature = (
  data: SignatureData,
  design: DesignType
) => {
  const designs = {
    design1: `
    <table
  class="sig-cont"
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
  <tbody style="margin: 20px;">
    <tr style="margin: 0; padding: 0; height: 140px">
      <td class="aog-logo" style="width: 35%; padding: 10px 0 0 20px;">
        <img
          src="https://adongroup.com.au/wp-content/uploads/2024/12/AdonGroup.png"
          style="width: 90%"
        />
      </td>

      <td style="width: 65%; padding: 10px 0 0 0;">
        <div class="name-position-cont" style="font-size: 21px; line-height: .5">
          <strong style="line-height: 1.5">${data.name}</strong><br />
          <strong style="font-size: 12px;"
            >${data.title}</strong
          ><br /><br /><br />
        </div>
        <div class="links-cont" style="line-height: .6">
        ${
          data.phone
            ? `<a
            href="tel:${data.phone}"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/phone-call.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.phone} </a
          ><br />`
            : ""
        }

        ${
          data.website1
            ? `<a
            href="https://adongroup.com.au/"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.website1} </a
          ><br />`
            : ""
        }
          ${
            data.website2
              ? `<a
            href="https://adonworkforce.com.au/"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.website2}
          </a>`
              : ""
          }
        </div>
      </td>
    </tr>
    <tr style="margin: 0; padding: 0; height: 100px">
      <td></td>
    </tr>
  </tbody>
</table>`,

    design2: `
<table
  class="sig-cont"
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
  <tbody style="margin: 20px;">
    <tr style="margin: 0; padding: 0; height: 140px">
      <td class="aog-logo" style="width: 35%; padding: 10px 0 0 20px;">
        <img
          src="https://adongroup.com.au/wp-content/uploads/2024/12/AdonGroup.png"
          style="width: 90%"
        />
      </td>

      <td style="width: 40%; padding: 10px 0 0 0;">
        <div class="name-position-cont" style="font-size: 21px; line-height: .5">
          <strong style="line-height: 1.5">${data.name}</strong><br />
          <strong style="font-size: 12px;"
            >${data.title}</strong
          ><br /><br /><br />
        </div>
        <div class="links-cont" style="line-height: .6">
        ${
          data.phone
            ? `<a
            href="tel:${data.phone}"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/phone-call.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.phone} </a
          ><br />`
            : ""
        }

        ${
          data.website1
            ? `<a
            href="https://adongroup.com.au/"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.website1} </a
          ><br />`
            : ""
        }
          ${
            data.website2
              ? `<a
            href="https://adonworkforce.com.au/"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.website2}
          </a>`
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
    <tr style="margin: 0; padding: 0; height: 100px">
      <td></td>
    </tr>
  </tbody>
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
  <tbody style="margin: 20px;">
    <tr style="margin: 0; padding: 0; height: 140px">
      <td class="aog-logo" style="width: 35%; padding: 10px 0 0 20px;">
        <img
          src="https://adongroup.com.au/wp-content/uploads/2024/12/AdonGroup.png"
          style="width: 90%"
        />
      </td>

      <td style="width: 65%; padding: 10px 0 0 0;">
        <div class="name-position-cont" style="font-size: 21px; line-height: .5">
          <strong style="line-height: 1.5">${data.name}</strong><br />
          <strong style="font-size: 12px;"
            >${data.title}</strong
          ><br /><br /><br />
        </div>
        <div class="links-cont" style="line-height: .6">
        ${
          data.phone
            ? `<a
            href="tel:${data.phone}"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/phone-call.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.phone} </a
          ><br />`
            : ""
        }

        ${
          data.website1
            ? `<a
            href="https://adongroup.com.au/"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.website1} </a
          ><br />`
            : ""
        }
          ${
            data.website2
              ? `<a
            href="https://adonworkforce.com.au/"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.website2}
          </a>`
              : ""
          }
        </div>
      </td>
    </tr>
    <tr style="margin: 0; padding: 0; height: 100px">
      <td></td>
    </tr>
  </tbody>
</table>`,

    design2: `
<table
  class="sig-cont"
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
  <tbody style="margin: 20px;">
    <tr style="margin: 0; padding: 0; height: 140px">
      <td class="aog-logo" style="width: 35%; padding: 10px 0 0 20px;">
        <img
          src="https://adongroup.com.au/wp-content/uploads/2024/12/AdonGroup.png"
          style="width: 90%"
        />
      </td>

      <td style="width: 40%; padding: 10px 0 0 0;">
        <div class="name-position-cont" style="font-size: 21px; line-height: .5">
          <strong style="line-height: 1.5">${data.name}</strong><br />
          <strong style="font-size: 12px;"
            >${data.title}</strong
          ><br /><br /><br />
        </div>
        <div class="links-cont" style="line-height: .6">
        ${
          data.phone
            ? `<a
            href="tel:${data.phone}"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/phone-call.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.phone} </a
          ><br />`
            : ""
        }

        ${
          data.website1
            ? `<a
            href="https://adongroup.com.au/"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.website1} </a
          ><br />`
            : ""
        }
          ${
            data.website2
              ? `<a
            href="https://adonworkforce.com.au/"
            style="font-size: 12px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 14px;
                height: 14px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.website2}
          </a>`
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
    <tr style="margin: 0; padding: 0; height: 100px">
      <td></td>
    </tr>
  </tbody>
</table>`,
  };

  return designs[design].trim();
};
