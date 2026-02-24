import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";

export default function PeopleInput() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>#</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="0" className="" />
    </InputGroup>
  );
}
