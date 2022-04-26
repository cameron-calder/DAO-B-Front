import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BlackBgModal from '../../components/BlackBgModal'
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import { addBonus, setTotalBonus } from '../../store/actions';
import { useFormik } from 'formik'
export default function SuggestBonus() {
    const dispatch = useDispatch()
    const totalBonus = useSelector(state => state.totalBonus)
    const userId = 1
    useFormik({
        initialValues: {
            bonusLimit: 0
        },
        validationSchema: { settingsFormValidation },

        onSubmit: async values => {
            if (bonusLimit > totalBonus) {
                console.log("limit exceded")
                return
            }
            dispatch(addBonus(userId, bonus))
            dispatch(setTotalBonus(totalBonus - bonus))

        },
    })
    // const handleSubmit = (bonus) => {
    //     // console.log("something")


    // }

    return (
        <BlackBgModal topTitle="Suggest bonus" cancelPath="/user/dashboard">
            <form className="my-6" onSubmit={formik.handleSubmit}>
                <div className="flex items-center gap-4">
                    <Input value={formik.values.bonusLimit} onChange={formik.values.bonusLimit} type='text' name='bonus' label="Suggest Bonus" placeholder='30%' icons="fa fa-solid fa-euro" />
                    <h1 className='text-6xl -mt-4'>£134</h1>
                </div>
                <div className="flex items-center gap-2 mt-6">
                    <Link to="/user/dashboard">
                        <Button>
                            <i className="fa fa-solid fa-xmark" /><span className="sm:block hidden">Cancel</span>
                        </Button>
                    </Link>
                    <Button handleSubmit={handleSubmit}>
                        <i className="fa fa-solid fa-check" /><span className="sm:block hidden">Save</span>
                    </Button>
                </div>
            </form>
        </BlackBgModal>
    )
}
