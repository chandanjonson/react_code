
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../lib/store';
import { generateApp } from '../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

const Onboarding = () => {
    const navigate = useNavigate();
    const { addApp } = useStore();
    const [serviceName, setServiceName] = useState('');
    const [environment, setEnvironment] = useState('Production');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!serviceName) return;

        setIsLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        const newApp = generateApp(serviceName, environment);
        addApp(newApp);

        setIsLoading(false);
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Connect your Service
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Start sending OpenTelemetry signals in seconds.
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Service Details</CardTitle>
                        <CardDescription>
                            Configure your service metadata.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="service-name">Service Name</Label>
                                <Input
                                    id="service-name"
                                    placeholder="e.g. payment-service"
                                    value={serviceName}
                                    onChange={(e) => setServiceName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="environment">Environment</Label>
                                <select
                                    id="environment"
                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={environment}
                                    onChange={(e) => setEnvironment(e.target.value)}
                                >
                                    <option value="Production">Production</option>
                                    <option value="Staging">Staging</option>
                                    <option value="Development">Development</option>
                                </select>
                            </div>

                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? 'Registering...' : 'Register Service'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Onboarding;
