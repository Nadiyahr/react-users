import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { AccordionEventKey } from 'react-bootstrap/esm/AccordionContext';

const CustomToggle = ({ children, eventKey }: Button) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!')
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

const Comments = (eventKey: AccordionEventKey) => {
  return (
    <Accordion defaultActiveKey={eventKey}>
      <Card>
        <Card.Header>
          <CustomToggle eventKey={eventKey}>Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I amm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

// render(<Example />);
export default Comments;
