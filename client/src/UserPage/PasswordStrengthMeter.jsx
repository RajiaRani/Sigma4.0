const PasswordCriteria = ({password}) =>{

    const criteria = [
        {label : "At least 6 characters", met: password.length >=6 },
        {label : "Contains uppercase letter", met: /[A-Z]/.test(password)},
        {label : "Contains lowercase letter", met: /[a-z]/.test(password)},
        {label : "Contains a numbers", met: /\d/.test(password)},
        {label : "Contains uppercase letter", met: /[A-Z]/.test(password)},
        {label : "Contains special character", met: /[^A-Za-z0-9]/.test(password)},
    ];
    return(
        <div className="mt-2 space-y-1">
          {criteria.map((item, index) => (
            <div key={item.label} className="flex items-centers text-xs"> 
            { item.met ? (
                <Check className=" mr-2" />

            ): ( <X className="mr-2" /> 

            )}
            <span className={item.met ? " text-green-500" : "text-grey-400"}>{item.label}</span>
            </div>
          ))}
        </div>
    )
}


export default function PasswordStrengthMeter({password}) {
    const getStrength = (pass) => {
        let strength = 0;
        if(pass.length >=6) strength++;
        if(pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
        if(pass.match(/\d/)) strength++;
        if(pass.match(/[^a-zA-Z\d]/)) strength++;
        return strength;
    };
    const strength = getStrength(password);


    const getStrengthText = (strength) => {
        if(strength === 0) return "Very Weak";
        if(strength === 1) return " Weak";
        if(strength === 2) return "Fair";
        if(strength === 3) return "Good";
        return "Strong";
    }

    return(
        <div className="mt-2">
           <div className="flex justify-center item-center mb-1">
            <span className="text-xs text-grey-400">Password strength</span>
            <span className="text-xs text-grey-400">{getStrengthText(strength)}</span>
           </div>
        </div>
    )
}