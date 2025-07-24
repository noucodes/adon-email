import { SignatureData, DesignType } from "@/types/signature";

export const generateGmailSignature = (
  data: SignatureData,
  design: DesignType
) => {
  const designs = {
    modern: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 14px; line-height: 1.5; color: #333; max-width: 500px;">
  <div style="border-left: 4px solid #2563eb; padding-left: 16px; margin-bottom: 16px;">
    <div style="font-size: 18px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px;">
      ${data.name}
    </div>
    <div style="font-size: 14px; color: #666; margin-bottom: 2px;">
      ${data.title}
    </div>
    <div style="font-size: 14px; font-weight: 600; color: #2563eb;">
      ${data.company}
    </div>
  </div>
  
  <div style="margin-bottom: 12px;">
    <div style="margin-bottom: 6px;">
      <span style="color: #666; margin-right: 8px;">✉️</span>
      <a href="mailto:${
        data.email
      }" style="color: #2563eb; text-decoration: none; font-weight: 500;">${
      data.email
    }</a>
    </div>
    ${
      data.phone
        ? `<div style="margin-bottom: 6px;"><span style="color: #666; margin-right: 8px;">📱</span><a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${data.phone}</a></div>`
        : ""
    }
    ${
      data.website
        ? `<div style="margin-bottom: 6px;"><span style="color: #666; margin-right: 8px;">🌐</span><a href="${data.website}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${data.website}</a></div>`
        : ""
    }
  </div>
  
  ${
    data.linkedin || data.twitter
      ? `
  <div style="border-top: 1px solid #e5e7eb; padding-top: 12px;">
    ${
      data.linkedin
        ? `<a href="${data.linkedin}" style="display: inline-block; margin-right: 12px; padding: 6px 12px; background-color: #0077b5; color: white; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 500;">LinkedIn</a>`
        : ""
    }
    ${
      data.twitter
        ? `<a href="${data.twitter}" style="display: inline-block; padding: 6px 12px; background-color: #1da1f2; color: white; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 500;">Twitter</a>`
        : ""
    }
  </div>`
      : ""
  }
</div>`,

    classic: `
<div style="font-family: 'Times New Roman', serif; font-size: 14px; line-height: 1.6; color: #2c2c2c; max-width: 500px;">
  <div style="margin-bottom: 16px;">
    <div style="font-size: 20px; font-weight: bold; color: #1a1a1a; margin-bottom: 6px;">
      ${data.name}
    </div>
    <div style="font-size: 14px; font-style: italic; color: #555; margin-bottom: 4px;">
      ${data.title}
    </div>
    <div style="font-size: 14px; font-weight: bold; color: #8b5a2b;">
      ${data.company}
    </div>
  </div>
  
  <div style="border-top: 2px solid #8b5a2b; border-bottom: 1px solid #ddd; padding: 12px 0; margin-bottom: 12px;">
    <div style="margin-bottom: 4px;">
      <strong>Email:</strong> <a href="mailto:${
        data.email
      }" style="color: #8b5a2b; text-decoration: underline;">${data.email}</a>
    </div>
    ${
      data.phone
        ? `<div style="margin-bottom: 4px;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #8b5a2b; text-decoration: underline;">${data.phone}</a></div>`
        : ""
    }
    ${
      data.website
        ? `<div style="margin-bottom: 4px;"><strong>Website:</strong> <a href="${data.website}" style="color: #8b5a2b; text-decoration: underline;">${data.website}</a></div>`
        : ""
    }
  </div>
  
  ${
    data.linkedin || data.twitter
      ? `
  <div style="font-size: 12px;">
    <strong>Connect with me:</strong>
    ${
      data.linkedin
        ? `<a href="${data.linkedin}" style="color: #8b5a2b; text-decoration: underline; margin-left: 8px;">LinkedIn</a>`
        : ""
    }
    ${
      data.twitter
        ? `<a href="${data.twitter}" style="color: #8b5a2b; text-decoration: underline; margin-left: 8px;">Twitter</a>`
        : ""
    }
  </div>`
      : ""
  }
</div>`,

    minimal: `
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; line-height: 1.4; color: #333; max-width: 400px;">
  <div style="margin-bottom: 12px;">
    <div style="font-size: 16px; font-weight: 300; color: #000; margin-bottom: 2px;">
      ${data.name}
    </div>
    <div style="font-size: 12px; color: #666; margin-bottom: 1px;">
      ${data.title}
    </div>
    <div style="font-size: 12px; color: #999;">
      ${data.company}
    </div>
  </div>
  
  <div style="font-size: 12px; color: #666;">
    <div><a href="mailto:${
      data.email
    }" style="color: #333; text-decoration: none;">${data.email}</a></div>
    ${
      data.phone
        ? `<div><a href="tel:${data.phone}" style="color: #333; text-decoration: none;">${data.phone}</a></div>`
        : ""
    }
    ${
      data.website
        ? `<div><a href="${data.website}" style="color: #333; text-decoration: none;">${data.website}</a></div>`
        : ""
    }
  </div>
  
  ${
    data.linkedin || data.twitter
      ? `
  <div style="margin-top: 8px; font-size: 11px;">
    ${
      data.linkedin
        ? `<a href="${data.linkedin}" style="color: #666; text-decoration: none; margin-right: 12px;">LinkedIn</a>`
        : ""
    }
    ${
      data.twitter
        ? `<a href="${data.twitter}" style="color: #666; text-decoration: none;">Twitter</a>`
        : ""
    }
  </div>`
      : ""
  }
</div>`,

    creative: `
<div style="font-family: 'Comic Sans MS', cursive, sans-serif; font-size: 14px; line-height: 1.5; color: #333; max-width: 520px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 15px; color: white;">
  <div style="text-align: center; margin-bottom: 16px;">
    <div style="font-size: 22px; font-weight: bold; color: #fff; margin-bottom: 4px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
      🌟 ${data.name} 🌟
    </div>
    <div style="font-size: 16px; color: #f0f8ff; margin-bottom: 2px;">
      ${data.title}
    </div>
    <div style="font-size: 16px; font-weight: 600; color: #ffd700;">
      ✨ ${data.company} ✨
    </div>
  </div>
  
  <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 10px; margin-bottom: 12px;">
    <div style="margin-bottom: 6px;">
      <span style="margin-right: 8px;">📧</span>
      <a href="mailto:${
        data.email
      }" style="color: #fff; text-decoration: none; font-weight: 500;">${
      data.email
    }</a>
    </div>
    ${
      data.phone
        ? `<div style="margin-bottom: 6px;"><span style="margin-right: 8px;">📞</span><a href="tel:${data.phone}" style="color: #fff; text-decoration: none; font-weight: 500;">${data.phone}</a></div>`
        : ""
    }
    ${
      data.website
        ? `<div style="margin-bottom: 6px;"><span style="margin-right: 8px;">🌍</span><a href="${data.website}" style="color: #fff; text-decoration: none; font-weight: 500;">${data.website}</a></div>`
        : ""
    }
  </div>
  
  ${
    data.linkedin || data.twitter
      ? `
  <div style="text-align: center;">
    ${
      data.linkedin
        ? `<a href="${data.linkedin}" style="display: inline-block; margin: 0 6px; padding: 8px 16px; background-color: #ff6b6b; color: white; text-decoration: none; border-radius: 20px; font-size: 12px; font-weight: 500;">🔗 LinkedIn</a>`
        : ""
    }
    ${
      data.twitter
        ? `<a href="${data.twitter}" style="display: inline-block; margin: 0 6px; padding: 8px 16px; background-color: #4ecdc4; color: white; text-decoration: none; border-radius: 20px; font-size: 12px; font-weight: 500;">🐦 Twitter</a>`
        : ""
    }
  </div>`
      : ""
  }
</div>`,

    corporate: `
<div style="font-family: 'Arial', sans-serif; font-size: 13px; line-height: 1.4; color: #2c3e50; max-width: 500px; border: 2px solid #34495e; padding: 16px; background-color: #ecf0f1;">
  <div style="text-align: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 2px solid #34495e;">
    <div style="font-size: 18px; font-weight: bold; color: #2c3e50; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">
      ${data.name}
    </div>
    <div style="font-size: 13px; color: #7f8c8d; margin-bottom: 2px; text-transform: uppercase;">
      ${data.title}
    </div>
    <div style="font-size: 14px; font-weight: bold; color: #34495e; text-transform: uppercase;">
      ${data.company}
    </div>
  </div>
  
  <div style="margin-bottom: 12px;">
    <div style="margin-bottom: 4px; padding: 4px 0;">
      <span style="font-weight: bold; color: #34495e; width: 60px; display: inline-block;">EMAIL:</span>
      <a href="mailto:${
        data.email
      }" style="color: #2980b9; text-decoration: none;">${data.email}</a>
    </div>
    ${
      data.phone
        ? `<div style="margin-bottom: 4px; padding: 4px 0;"><span style="font-weight: bold; color: #34495e; width: 60px; display: inline-block;">PHONE:</span><a href="tel:${data.phone}" style="color: #2980b9; text-decoration: none;">${data.phone}</a></div>`
        : ""
    }
    ${
      data.website
        ? `<div style="margin-bottom: 4px; padding: 4px 0;"><span style="font-weight: bold; color: #34495e; width: 60px; display: inline-block;">WEB:</span><a href="${data.website}" style="color: #2980b9; text-decoration: none;">${data.website}</a></div>`
        : ""
    }
  </div>
  
  ${
    data.linkedin || data.twitter
      ? `
  <div style="border-top: 1px solid #bdc3c7; padding-top: 8px; text-align: center;">
    ${
      data.linkedin
        ? `<a href="${data.linkedin}" style="display: inline-block; margin: 0 4px; padding: 4px 8px; background-color: #34495e; color: white; text-decoration: none; font-size: 11px; text-transform: uppercase;">LinkedIn</a>`
        : ""
    }
    ${
      data.twitter
        ? `<a href="${data.twitter}" style="display: inline-block; margin: 0 4px; padding: 4px 8px; background-color: #34495e; color: white; text-decoration: none; font-size: 11px; text-transform: uppercase;">Twitter</a>`
        : ""
    }
  </div>`
      : ""
  }
</div>`,

    card: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 14px; line-height: 1.4; color: #333; max-width: 450px;">
  <div style="display: flex; background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; overflow: hidden;">
    <div style="background-color: #6c757d; width: 4px;"></div>
    <div style="padding: 20px; flex: 1;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
        <div>
          <div style="font-size: 18px; font-weight: 600; color: #212529; margin-bottom: 4px;">
            ${data.name}
          </div>
          <div style="font-size: 13px; color: #6c757d; margin-bottom: 2px;">
            ${data.title}
          </div>
          <div style="font-size: 13px; font-weight: 500; color: #495057;">
            ${data.company}
          </div>
        </div>
        <div style="width: 60px; height: 60px; background-color: #e9ecef; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #6c757d;">
          ${data.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </div>
      </div>
      
      <div style="border-top: 1px solid #dee2e6; padding-top: 12px;">
        <div style="margin-bottom: 6px;">
          <a href="mailto:${
            data.email
          }" style="color: #0d6efd; text-decoration: none; font-size: 13px;">${
      data.email
    }</a>
        </div>
        ${
          data.phone
            ? `<div style="margin-bottom: 6px;"><a href="tel:${data.phone}" style="color: #0d6efd; text-decoration: none; font-size: 13px;">${data.phone}</a></div>`
            : ""
        }
        ${
          data.website
            ? `<div style="margin-bottom: 6px;"><a href="${data.website}" style="color: #0d6efd; text-decoration: none; font-size: 13px;">${data.website}</a></div>`
            : ""
        }
        
        ${
          data.linkedin || data.twitter
            ? `
        <div style="margin-top: 12px;">
          ${
            data.linkedin
              ? `<a href="${data.linkedin}" style="display: inline-block; margin-right: 8px; padding: 4px 8px; background-color: #0d6efd; color: white; text-decoration: none; border-radius: 4px; font-size: 11px;">LinkedIn</a>`
              : ""
          }
          ${
            data.twitter
              ? `<a href="${data.twitter}" style="display: inline-block; padding: 4px 8px; background-color: #198754; color: white; text-decoration: none; border-radius: 4px; font-size: 11px;">Twitter</a>`
              : ""
          }
        </div>`
            : ""
        }
      </div>
    </div>
  </div>
</div>`,
  };

  return designs[design].trim();
};

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
<div style="font-family: 'Roboto', Arial, sans-serif; font-size: 14px; line-height: 1.4; color: #323338; max-width: 480px; padding: 16px; border: 1px solid #d0d4e4; border-radius: 8px; background-color: #f8f9fd;">
  <div style="margin-bottom: 12px;">
    <div style="font-size: 17px; font-weight: 600; color: #323338; margin-bottom: 4px;">${
      data.name
    }</div>
    <div style="font-size: 13px; color: #676879; margin-bottom: 2px;">${
      data.title
    }</div>
    <div style="font-size: 13px; font-weight: 600; color: #0073ea;">${
      data.company
    }</div>
  </div>
  <div style="background-color: white; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
    <div style="margin-bottom: 6px;"><span style="color: #676879; font-size: 12px; margin-right: 6px;">EMAIL</span><a href="mailto:${
      data.email
    }" style="color: #0073ea; text-decoration: none; font-weight: 500;">${
      data.email
    }</a></div>
    ${
      data.phone
        ? `<div style="margin-bottom: 6px;"><span style="color: #676879; font-size: 12px; margin-right: 6px;">PHONE</span><a href="tel:${data.phone}" style="color: #0073ea; text-decoration: none; font-weight: 500;">${data.phone}</a></div>`
        : ""
    }
    ${
      data.website
        ? `<div><span style="color: #676879; font-size: 12px; margin-right: 6px;">WEB</span><a href="${data.website}" style="color: #0073ea; text-decoration: none; font-weight: 500;">${data.website}</a></div>`
        : ""
    }
  </div>
  ${
    data.linkedin || data.twitter
      ? `<div style="text-align: center;">${
          data.linkedin
            ? `<a href="${data.linkedin}" style="display: inline-block; margin: 0 6px; padding: 8px 16px; background-color: #0073ea; color: white; text-decoration: none; border-radius: 20px; font-size: 12px; font-weight: 500;">LinkedIn</a>`
            : ""
        }${
          data.twitter
            ? `<a href="${data.twitter}" style="display: inline-block; margin: 0 6px; padding: 8px 16px; background-color: #00d2d2; color: white; text-decoration: none; border-radius: 20px; font-size: 12px; font-weight: 500;">Twitter</a>`
            : ""
        }</div>`
      : ""
  }
</div>`,

    classic: generateGmailSignature(data, "classic"),
  };

  return designs[design].trim();
};
