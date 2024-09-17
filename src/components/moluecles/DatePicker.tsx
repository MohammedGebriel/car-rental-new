import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function DatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker/>
    </LocalizationProvider>
  );
}

export default DatePicker;
