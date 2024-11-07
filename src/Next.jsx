import React from 'react';


const OpenTelemetryLanding = () => {
    return (
        <div>
            <header className="bg-white shadow">
                <div className="px-4">
                    <nav className="flex items-center justify-between h-14">
                        <a className="flex items-center gap-2 text-lg font-semibold" href="#">
                            <img
                                alt="Logo"
                                className="rounded-lg"
                                height="32"
                                src="/api/placeholder/32/32"
                                width="32"
                            />
                            OpenTelemetry
                        </a>
                        <div className="flex items-center gap-4">
                            <nav className="flex items-center gap-6">
                                <a className="text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Features</a>
                                <a className="text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Docs</a>
                                <a className="text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Blog</a>
                            </nav>
                            <Button size="sm">Sign in</Button>
                        </div>
                    </nav>
                </div>
            </header>

            <main className="bg-gray-100">
                <section className="py-12">
                    <div className="grid gap-8 text-center md:gap-12 lg:gap-16">
                        <div className="space-y-2">
                            <div className="text-3xl font-extrabold tracking-tight lg:text-4xl">
                                OpenTelemetry: The key to observability
                            </div>
                            <div className="max-w-3xl mx-auto text-gray-600 md:text-xl">
                                OpenTelemetry is the single, open-source framework that provides the tools you need to capture
                                distributed traces, metrics, and logs. It enables you to gain full observability into your applications,
                                no matter the language or framework.
                            </div>
                        </div>
                        <img
                            alt="Hero image"
                            className="mx-auto rounded-lg overflow-hidden aspect-[2/1] object-cover object-center"
                            height="400"
                            src="/api/placeholder/800/400"
                            width="800"
                        />
                    </div>
                </section>

                <section className="border-t">
                    <div className="grid gap-8 py-12 md:py-16 lg:py-20">
                        <div className="space-y-2 text-center">
                            <div className="text-3xl font-extrabold tracking-tight">Why OpenTelemetry?</div>
                            <div className="max-w-3xl mx-auto text-gray-600 md:text-xl">
                                OpenTelemetry is the new standard for instrumenting your applications for observability. It provides a
                                single, open-source framework for collecting traces, metrics, and logs, making it easier than ever to
                                understand the behavior of your applications.
                            </div>
                        </div>
                        <div className="grid gap-6 md:gap-8 lg:gap-10">
                            {[
                                {
                                    title: "Distributed Tracing",
                                    description: "OpenTelemetry provides a standard way to instrument your applications to capture distributed traces, allowing you to follow the path of a request as it flows through your system."
                                },
                                {
                                    title: "Metrics Collection",
                                    description: "With OpenTelemetry, you can easily collect metrics from your applications, including request rates, error rates, and latency distributions, giving you insight into the performance of your services."
                                },
                                {
                                    title: "Logging",
                                    description: "OpenTelemetry makes it easy to capture logs from your applications and correlate them with traces and metrics, providing context when troubleshooting issues."
                                }
                            ].map((feature, index) => (
                                <Card key={index}>
                                    <CardContent className="grid gap-4 md:gap-6">
                                        <img
                                            alt="Feature image"
                                            className="rounded-lg overflow-hidden aspect-[2/1] object-cover object-center"
                                            height="200"
                                            src="/api/placeholder/400/200"
                                            width="400"
                                        />
                                        <div className="space-y-2">
                                            <div className="font-bold text-xl">{feature.title}</div>
                                            <div>{feature.description}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gray-900 py-12 md:py-16 lg:py-20">
                    <div className="grid gap-8 text-center text-white">
                        <div className="space-y-2">
                            <div className="font-extrabold text-3xl tracking-tight">Ready to get started with OpenTelemetry?</div>
                            <div className="max-w-2xl mx-auto text-gray-300 md:text-xl">
                                Sign up for an account and start instrumenting your applications for observability today.
                            </div>
                        </div>
                        <form className="mx-auto max-w-sm space-y-4">
                            <div className="grid w-full gap-2">
                                <Input placeholder="Email" required type="email" />
                                <Button className="w-full" type="submit">
                                    Sign up
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="py-12 md:py-16 lg:py-20">
                    <div className="grid gap-8">
                        <div className="space-y-2 text-center">
                            <div className="text-3xl font-extrabold tracking-tight">Contact Sales</div>
                            <div className="max-w-3xl mx-auto text-gray-600 md:text-xl">
                                Interested in learning more about OpenTelemetry? Contact our sales team to discuss how we can help you
                                gain observability into your applications.
                            </div>
                        </div>
                        <Card>
                            <CardContent className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input id="company" placeholder="Enter your company" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="Enter your email" required type="email" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Enter your message" required />
                                </div>
                                <Button>Submit</Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                    <div className="grid gap-8 md:grid-cols-4">
                        {[
                            {
                                title: "Features",
                                links: ["Distributed Tracing", "Metrics Collection", "Logging"]
                            },
                            {
                                title: "Community",
                                links: ["GitHub", "Slack", "Twitter"]
                            },
                            {
                                title: "Company",
                                links: ["About Us", "Contact Us", "Blog"]
                            },
                            {
                                title: "Contact",
                                links: ["Support", "Sales", "Contact Form"]
                            }
                        ].map((section, index) => (
                            <div key={index} className="space-y-4">
                                <div className="font-bold text-xl">{section.title}</div>
                                <div className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <a key={linkIndex} className="block text-sm text-gray-400 hover:underline" href="#">
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800">
                        <div className="text-sm text-gray-400">© 2024 OpenTelemetry. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default OpenTelemetryLanding;
