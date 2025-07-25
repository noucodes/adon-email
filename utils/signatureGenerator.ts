import { SignatureData, DesignType } from "@/types/signature";

export const generateOutlookSignature = (
  data: SignatureData,
  design: DesignType
) => {
  const designs = {
    modern: `
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
            style="font-size: 14px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/phone-call.png"
              style="
                width: 15px;
                height: 15px;
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
            style="font-size: 14px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 15px;
                height: 15px;
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
            style="font-size: 14px; color: #fff; text-decoration: none; display: flex; align-items: center;"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 15px;
                height: 15px;
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

    classic: `
<table cellpadding="0" cellspacing="0" style="font-family: Times New Roman, serif; font-size: 14px; color: #2c2c2c; max-width: 500px;">
  <tr>
    <td>
      <table cellpadding="0" cellspacing="0">
        <tr><td style="font-size: 18px; font-weight: bold; color: #1a1a1a; padding-bottom: 6px;">${
          data.name
        }</td></tr>
        <tr><td style="font-size: 14px; font-style: italic; color: #555; padding-bottom: 4px;">${
          data.title
        }</td></tr>
        <tr><td style="font-size: 14px; font-weight: bold; color: #8b5a2b; padding-bottom: 12px;">${
          data.company
        }</td></tr>
        <tr><td style="border-top: 2px solid #8b5a2b; padding-top: 12px; padding-bottom: 4px;"><strong>Email:</strong> <a href="mailto:${
          data.email
        }" style="color: #8b5a2b; text-decoration: underline;">${
      data.email
    }</a></td></tr>
        ${
          data.phone
            ? `<tr><td style="padding-bottom: 4px;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #8b5a2b; text-decoration: underline;">${data.phone}</a></td></tr>`
            : ""
        }
        ${
          data.website
            ? `<tr><td style="padding-bottom: 8px;"><strong>Website:</strong> <a href="${data.website}" style="color: #8b5a2b; text-decoration: underline;">${data.website}</a></td></tr>`
            : ""
        }
        ${
          data.linkedin || data.twitter
            ? `<tr><td style="font-size: 12px; border-top: 1px solid #ddd; padding-top: 8px;"><strong>Connect:</strong>${
                data.linkedin
                  ? ` <a href="${data.linkedin}" style="color: #8b5a2b; text-decoration: underline;">LinkedIn</a>`
                  : ""
              }${
                data.twitter
                  ? ` <a href="${data.twitter}" style="color: #8b5a2b; text-decoration: underline;">Twitter</a>`
                  : ""
              }</td></tr>`
            : ""
        }
      </table>
    </td>
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
    modern: `
<table
  class="sig-cont"
  style="
    background-color: #000;
    color: #fff;
    border-radius: 15px;
    padding: 20px;
    width: 650px;
    background-image: url('adon_bg.png');
    background-repeat: no-repeat;
    background-position: center;
  "
>
  <tbody>
    <tr style="margin: 0; padding: 0; height: 135px">
      <td class="aog-logo" style="width: 40%">
        <img
          src="https://adongroup.com.au/wp-content/uploads/2024/12/AdonGroup.png"
          style="width: 80%"
        />
      </td>

      <td style="width: 60%">
        <div class="name-position-cont" style="font-size: 21px; line-height: 1">
          <strong style="line-height: 1.5">${data.name}</strong><br />
          <strong style="font-size: 12px; margin-top: 10px; margin-bottom: 0"
            >${data.title}</strong
          ><br /><br />
        </div>
        <div class="links-cont" style="line-height: 1">
        ${
          data.phone
            ? `<a
            href="tel:${data.phone}"
            style="font-size: 14px; color: #fff; text-decoration: none; display: flex"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/phone-call.png"
              style="
                width: 15px;
                height: 15px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            ${data.phone} </a
          ><br />`
            : ""
        }

          <a
            href="https://adongroup.com.au/"
            style="font-size: 14px; color: #fff; text-decoration: none; display: flex"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 15px;
                height: 15px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            www.adongroup.com.au </a
          ><br />
          <a
            href="https://adonworkforce.com.au/"
            style="font-size: 14px; color: #fff; text-decoration: none; display: flex"
          >
            <img
              src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
              style="
                width: 15px;
                height: 15px;
                margin-right: 10px;
                object-fit: contain;
              "
            />
            www.adonworkforce.com.au
          </a>
        </div>
      </td>
    </tr>
    <tr style="margin: 0; padding: 0; height: 90px">
      <td></td>
    </tr>
  </tbody>
</table>`,

    classic: `
<div style="font-family: 'Times New Roman', serif; font-size: 14px; color: #2c2c2c; max-width: 500px; padding: 16px; border: 1px solid #ccc; background-color: #fff;">
  <div style="font-size: 18px; font-weight: bold; color: #1a1a1a; margin-bottom: 6px;">${
    data.name
  }</div>
  <div style="font-size: 14px; font-style: italic; color: #555; margin-bottom: 4px;">${
    data.title
  }</div>
  <div style="font-size: 14px; font-weight: bold; color: #8b5a2b; margin-bottom: 12px;">${
    data.company
  }</div>
  <div style="margin-bottom: 8px;"><strong>Email:</strong> <a href="mailto:${
    data.email
  }" style="color: #8b5a2b; text-decoration: underline;">${data.email}</a></div>
  ${
    data.phone
      ? `<div style="margin-bottom: 8px;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #8b5a2b; text-decoration: underline;">${data.phone}</a></div>`
      : ""
  }
  ${
    data.website
      ? `<div style="margin-bottom: 8px;"><strong>Website:</strong> <a href="${data.website}" style="color: #8b5a2b; text-decoration: underline;">${data.website}</a></div>`
      : ""
  }
  ${
    data.linkedin || data.twitter
      ? `<div style="font-size: 12px; margin-top: 12px;"><strong>Connect:</strong>${
          data.linkedin
            ? ` <a href="${data.linkedin}" style="color: #8b5a2b; text-decoration: underline;">LinkedIn</a>`
            : ""
        }${
          data.twitter
            ? ` <a href="${data.twitter}" style="color: #8b5a2b; text-decoration: underline;">Twitter</a>`
            : ""
        }</div>`
      : ""
  }
</div>`,
  };

  return designs[design].trim();
};
