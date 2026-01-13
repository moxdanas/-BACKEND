import Mailgen from "mailgen";

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App ! , We're excited to have you on board",
      action: {
        instructions:
          "to verify your email please click on the following button!",
        button: {
          color: "#1aae5aff",
          text: "Verify your email !",
          link: verificationUrl,
        },
      },
      outro: "Need help , or have questions? Just reply to this email !",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset your password",
      action: {
        instructions:
          "to reset the password click on the following button or link below!",
        button: {
          color: "rgb(150, 26, 22)",
          text: "Reset Password !",
          link: passwordResetUrl,
        },
      },
      outro: "Need help , or have questions? Just reply to this email !",
    },
  };
};

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };
