import React from "react";
import { Chip } from "@material-ui/core/";
import styled from "styled-components";

type Props = {
  label: string;
};

const SecondaryChip: React.FC<Props> = (props) => {
  return <CustomChip size="small" label={props.label} />;
};

const CustomChip = styled(Chip)`
  background-color: ${(props) => props.theme.palette.secondary.main};
  color: #fff;
  font-size: 12px;
`;

export default SecondaryChip;
