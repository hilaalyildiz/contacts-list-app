import {useState, useEffect} from 'react'

const initialFormValues = {fullName:"", phoneNumber:""}

function Form({addContact, contacts}) {
    const [form,setForm] = useState(initialFormValues)
    useEffect(() => {    
        setForm(initialFormValues)
    },[contacts])
    
    // input içeriği değiştiğinde state'e atama işlemi yapan fonks
    const onChangeInput = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(form.fullName === '' || form.phoneNumber === ''){
            return false
        }

        addContact([...contacts,form])
    }

return (<form onClick={onSubmit}>
        <div>
            <input 
            name ="fullName" 
            placeholder="Full Name"
            value = {form.fullName}
            onChangeInput ={onChangeInput}
            />
        </div>
        <div>   
            <input 
            name ="phoneNumber" 
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChangeInput ={onChangeInput}
            />
        </div>
        <div>
            <button>Add</button>
        </div>
    </form>
  )
}

export default index