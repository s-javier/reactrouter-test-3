import { useNavigate } from 'react-router'
import { Button } from '~/components/ui/button'
import { Checkbox, CheckboxField } from '~/components/ui/checkbox'
import { Field, Label } from '~/components/ui/fieldset'
import { Heading } from '~/components/ui/heading'
import { Input } from '~/components/ui/input'
import { Strong, Text, TextLink } from '~/components/ui/text'

export default function AuthLoginPage() {
  const navigate = useNavigate()

  return (
    <div className="grid w-full max-w-sm grid-cols-1 gap-8">
      {/* <Logo className="h-6 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]" /> */}
      <Heading>Ingresa a tu cuenta</Heading>
      <Field>
        <Label>Email</Label>
        <Input type="email" name="email" />
      </Field>
      <Field>
        <Label>Password</Label>
        <Input type="password" name="password" />
      </Field>
      <div className="flex items-center justify-between">
        <CheckboxField>
          <Checkbox name="remember" />
          <Label>Remember me</Label>
        </CheckboxField>
        <Text>
          <div onClick={() => navigate('/auth/test')}>
            <Strong>Forgot password?</Strong>
          </div>
        </Text>
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
      <Text>
        Don’t have an account?{' '}
        <TextLink to="/auth/registro">
          <Strong>Sign up</Strong>
        </TextLink>
      </Text>
    </div>
  )
}
