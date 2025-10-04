import Box from "../components/Box";
import Field from "../components/Field";
import Form from "../components/Form";

function Categories() {
  return (
    <div>
      <Box title="Create Categories" buttonTitle="Go Back">
        <Form primaryButtonTitle="Create" secondaryButtonTitle="Cancel">
          <Field label="Category Name" />
        </Form>
      </Box>
    </div>
  );
}

export default Categories;

const formFields = [
  { label: "First Name", type: "text" },
  { label: "Last Name", type: "text" },
  { label: "Email Address", type: "email" },
  { label: "Contact Number", type: "tel" },
  { label: "Position", type: "text" },
];
