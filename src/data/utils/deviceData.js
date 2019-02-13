export const getLang = function() {
  return navigator.languages && navigator.languages.length
    ? navigator.languages[0].split("-")[0]
    : navigator.language.split("-")[0];
};

export const isMobile = () => {
  if (navigator.userAgent.match(/Android/i)) {
    return {
      mobile: true,
      userAgent: "Android"
    };
  } else if (navigator.userAgent.match(/BlackBerry/i)) {
    return {
      mobile: true,
      userAgent: "BlackBerry"
    };
  } else if (navigator.userAgent.match(/iPhone|iPod/i)) {
    return {
      mobile: true,
      userAgent: "iPhone"
    };
  } else if (navigator.userAgent.match(/iPad/i)) {
    return {
      mobile: false,
      userAgent: "iPad"
    };
  } else if (navigator.userAgent.match(/Opera Mini/i)) {
    return {
      mobile: true,
      userAgent: "Opera"
    };
  } else if (navigator.userAgent.match(/IEMobile/i)) {
    return {
      mobile: true,
      userAgent: "WindowsPhone"
    };
  } else if (navigator.userAgent.match(/Chrome/i)) {
    return {
      mobile: false,
      userAgent: "Web Chrome"
    };
  } else if (navigator.userAgent.match(/Safari/i)) {
    return {
      mobile: false,
      userAgent: "Web Safari"
    };
  } else if (navigator.userAgent.match(/Mozilla/i)) {
    return {
      mobile: false,
      userAgent: "Web Mozilla"
    };
  } else {
    return {
      mobile: false,
      userAgent: "Web"
    };
  }
};

const screenType = () => {
  if (window.innerWidth <= 480) {
    return "xs";
  } else if (window.innerWidth <= 768) {
    return "sm";
  } else if (window.innerWidth <= 992) {
    return "md";
  } else if (window.innerWidth <= 1200) {
    return "lg";
  } else if (window.innerWidth <= 1600) {
    return "hd";
  } else if (window.innerWidth <= 2560) {
    return "fhd";
  } else {
    return "uhd";
  }
};

const screenData = () => {
  return {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    screenOrientation: window.matchMedia("(orientation:landscape)").matches
      ? "landscape"
      : "portrait",
    screenType: screenType()
  };
};

export const getDeviceData = () => {
  return {
    lang: getLang(),
    ...isMobile(),
    ...screenData()
  };
};
