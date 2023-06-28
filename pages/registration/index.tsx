import style from './index.module.scss';
import { useForm, SubmitHandler } from "react-hook-form"

type FormValues = {
  username: string
  email: string
  password: string
  password2: string
}

export default function Registration() {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <div className={style.content}>
        <div className={style.registration}>
            <h1>Sign Up</h1>
            <div className={style.item}>
                <a href="" className={style.link}>
                    <img src="/img/google-svg.svg" alt="google.com" />
                </a>
                <a href=""  className={style.link}>
                    <img src="/img/github-svg.svg" alt="github.com" />
                </a>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username</label>
                    <input {...register("username")} placeholder="Epam" />
                </div>
                <div>
                    <label>Email</label>
                    <input {...register("email")} placeholder="Epam@epam.com"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" {...register("password")} placeholder="******************"/>
                </div>
                <div>
                    <label>Password confirmation</label>
                    <input type="password" {...register("password2")} placeholder="******************"/>
                </div>
                <div>
                    <input className={style.button} type="submit" value="Sign Up" />
                </div>
            </form>
            <p>Do you have an account?</p>
            <a href="#" className={style.SignIn} >Sign In</a>
        </div>
    </div>
  )
}
