import {format} from 'date-fns';
const dateUtils = {
  getDateAndTime: (date: Date) => {
    if (!date) {
      return '';
    }
    return format(date, 'dd-MM-yyyy hh:mm a');
  },
};

export default dateUtils;
