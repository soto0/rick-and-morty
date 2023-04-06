import { FC } from 'react';
import { Field, Form, Formik } from "formik";
import styles from './Filter.module.scss';

interface FilterProps {
    SetStatus: any,
    SetPage: any,
    SetGender: any,
    SetName: any
};

const Filter: FC<FilterProps> = (props: FilterProps) => {
    const setStatus = (e: any) => {
        props.SetStatus(e.target.innerText);
        props.SetPage(1)
    };

    const setGender = (e: any) => {
        props.SetGender(e.target.innerText);
        props.SetPage(1);
    };

    return (
        <section className={styles.filter}>
            <div className="container">
                <h2 className={styles.title}>Filters</h2>
                <Formik
                    initialValues={{ name: '' }}
                    onSubmit={values => props.SetName(values.name)}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid }) => (
                        <Form className={styles.form}>
                            <Field
                                type="text"
                                name="name"
                                className={styles.search}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                placeholder="Enter name..."
                            />
                            {touched.name && errors.name && <p className={'error'}>Fill the field</p>}
                            <button type="submit" disabled={!isValid} className="button filter__button">Filter</button>
                        </Form>
                    )}
                </Formik>
                <h4 className={styles.filter__title}>Status</h4>
                <div className={styles.status__block}>
                    <p className={styles.filter__block} onClick={setStatus}> alive</p>
                    <p className={styles.filter__block} onClick={setStatus}>dead</p>
                    <p className={styles.filter__block} onClick={setStatus}>unknown</p>
                </div>
                <h4 className={styles.filter__title}>Gender</h4>
                <div className={styles.gender__block}>
                    <p className={styles.filter__block} onClick={setGender}>female</p>
                    <p className={styles.filter__block} onClick={setGender}>male</p>
                    <p className={styles.filter__block} onClick={setGender}>genderless</p>
                    <p className={styles.filter__block} onClick={setGender}>unknown</p>
                </div>
            </div>
        </section >
    );
};

export default Filter;