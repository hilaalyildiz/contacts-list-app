import {useState} from 'react'

function Form() {
    const [form,setForm] = useState({fullName:"",phoneNumber:""})
    
    // input içeriği değiştiğinde state'e atama işlemi yapan fonks
    const onChangeInput = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

return (<form onClick={onSubmit}>
        <div>
            <input 
            name ="fullName" 
            placeholder="Full Name"
            onChangeInput ={onChangeInput}
            />
        </div>
        <div>   
            <input 
            name ="phoneNumber" 
            placeholder="Phone Number"
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