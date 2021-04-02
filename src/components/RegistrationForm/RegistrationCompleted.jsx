import React from "react";

import { Typography } from "@material-ui/core";
import Lottie from "react-lottie";

import complete from "./style/complete.json";

function RegistrationCompleted() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: complete,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={400} width={400} />
      {/* animationData by Pavlo Monakhov */}
      <Typography variant="h6" align="center">
        Cadastro realizado com sucesso!
      </Typography>
    </>
  );
}

export default RegistrationCompleted;
