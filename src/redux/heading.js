export const updateHeading = () => {
  return {
    type: 'UPDATE_HEADING'
  };
};

let counter = 0;

export default function headingReducer(heading = [], action) {
  let finalHeading = `Hello, I'm Juan Espinosa`.split('');

  switch(action.type) {
    case 'UPDATE_HEADING':
      let updatedHeading = [...heading, finalHeading[counter]];
      counter++;
      return updatedHeading;
    default:
      return heading;
  };
};
