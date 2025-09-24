import NextLogo from "@components/NextLogo";
import MyCard1 from "@components/MyCard1";
import MyCard2 from "@components/Mycard2";
import Link from "@node_modules/next/link";
import { Button } from "@*/components/ui/button"
import { Input } from "@*/components/ui/input"
import { Label } from "@*/components/ui/label"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@*/components/ui/card"
  
  
  
  
  
 
  


export default function Home() {
  return (
    <>
      <section className="container mx-auto text-center">
        <h1>Home page</h1>
        <NextLogo className="text-White70 w-1/4 inline-block my-10" />
        <h2 className="mb-4"><span className="bg-White70 px-4 py-1 inline-block rounded-md">What is Lorem Ipsum?</span></h2>
        <h3 className="mb-4"><span className="bg-White30 px-4 py-1 inline-block">Lorem Ipsum is simply dummy text latest</span></h3>
        <p className="w-1/2 mx-auto">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <Link href="/about" className="text-off-white underline">Go to About page</Link>
        <button className="bg-cta text-off-white px-4 py-2 rounded-md m-4 cursor-pointer">My Button</button>
        <Button variant="default" className="cursor-pointer">Button shadcn</Button>
        <div className="grid grid-cols-3 gap-4">
          <MyCard1 
            title="My title" 
            description="Contrary to popular belief, Lorem Ipsum is not simply random text." 
            cardClassName="bg-off-white p-4 rounded-md" 
            titleClassName="text-title"
          />
          <MyCard2 className="bg-off-white p-4 rounded-md">
            <h2 className="text-title">Title</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </MyCard2>
          <Card className="w-full max-w-sm text-left dark">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>
                <Button variant="link">Sign Up</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}
