import { ComponentProps } from 'react'

import { Button } from '@/registry/default/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/registry/default/ui/card'
import { Checkbox } from '@/registry/default/ui/checkbox'
import { Input } from '@/registry/default/ui/input'
import { Label } from '@/registry/default/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/default/ui/tabs'

import {
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { useConfigForm } from '../_hooks/use-config-form'

type FormProps = Partial<ComponentProps<typeof TabsList>>

export const TabsPreview = () => {
  const { props, form } = useConfigForm<FormProps>([
    {
      name: 'variant',
      type: 'radio',
      options: ['default', 'line', 'button'],
      defaultValue: 'default',
    },
  ])

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Tabs</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="mb-2 grid w-full grid-cols-2" {...props}>
            <TabsTrigger value="login">Log in</TabsTrigger>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>Log in to your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <Label htmlFor="login-username" defaultValue="hawa130">
                    Username
                  </Label>
                  <Input id="login-username" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="login-password" defaultValue="hawa130">
                    Password
                  </Label>
                  <Input id="login-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="filled" color="primary">
                  Log in
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>Start your journey with us</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <Label htmlFor="signup-username">Username</Label>
                  <Input id="signup-username" defaultValue="hawa130" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" defaultValue="hawa130" />
                </div>
                <div className="flex items-center space-x-2 py-1">
                  <Checkbox id="signup-terms" />
                  <Label htmlFor="signup-terms">Accept terms and conditions</Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="filled" color="primary">
                  Sign up
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </ComponentPreviewCard>
    </section>
  )
}
