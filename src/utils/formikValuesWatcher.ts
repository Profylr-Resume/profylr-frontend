import { useFormikContext } from "formik";
import { useEffect } from "react";

interface FormikValueWatcherProps<T> {
    onChange: (values: T) => void;
  }

// Custom component to watch Formik values and call handleOnChange
const FormikValueWatcher = <T> ({ onChange }: FormikValueWatcherProps<T>):null => {
    const { values } = useFormikContext<T>();

    useEffect(() => {
        onChange(values);
    }, [values, onChange]);

    return null; // This component doesn’t render anything
};

export default FormikValueWatcher;