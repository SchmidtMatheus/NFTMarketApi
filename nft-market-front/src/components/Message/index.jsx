import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

import bus from '../../utils/bus';

export const Message = () => {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {

    bus.addListener("flash", ({ message, type }) => {
      setVisibility(true);
      setMessage(message);
      setType(type);

      setTimeout(() => {
        setVisibility(false);
      }, 3000);
    })
  }, []);

  if (visibility) {
    if (type == "success") {
      return (
        <Styled.Success>
          {message}
        </Styled.Success>
      );
    } else if (type == "error") {
      return (
        <Styled.Error>
          {message}
        </Styled.Error>
      );
    }
  }
};
