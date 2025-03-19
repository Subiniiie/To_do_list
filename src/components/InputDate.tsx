import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

interface InputDateProps {
    date: Date | null;
    setDate: (date: Date | null) => void;
};

const InputDate = ({ date, setDate }: InputDateProps) => {

    return (
        <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
            dateFormat="yyyy-MM-dd"
            locale={ko}
        />
    )
}

export default InputDate;