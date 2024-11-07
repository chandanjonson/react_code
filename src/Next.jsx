import React from 'react';


const OpenTelemetryLanding = () => {
    {
        return (
            <div className="min-h-screen bg-gray-50">
                <header className="bg-blue-600 text-white p-4">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Monitoring Dashboard</h1>
                        <nav>
                            <a href="#" className="text-white hover:text-gray-200 mx-4">Overview</a>
                            <a href="#" className="text-white hover:text-gray-200 mx-4">Metrics</a>
                            <a href="#" className="text-white hover:text-gray-200 mx-4">Alerts</a>
                            <a href="#" className="text-white hover:text-gray-200 mx-4">Logs</a>
                        </nav>
                    </div>
                </header>

                <main className="py-8">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* System Health */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold">System Health</h2>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></div>
                                    <span className="text-green-700">All systems operational</span>
                                </div>
                            </div>
                        </div>

                        {/* Metrics */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold">Metrics</h2>
                            <div className="mt-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">CPU Usage</span>
                                    <span className="text-green-700 font-semibold">34%</span>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-gray-600">Memory Usage</span>
                                    <span className="text-yellow-500 font-semibold">72%</span>
                                </div>
                            </div>
                        </div>

                        {/* Alerts */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold">Recent Alerts</h2>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2"></div>
                                    <span className="text-red-700">High CPU usage detected</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2"></div>
                                    <span className="text-yellow-700">Memory usage nearing limit</span>
                                </div>
                            </div>
                        </div>

                        {/* Logs */}
                        <div className="bg-white shadow-md rounded-lg p-6 col-span-1 md:col-span-2">
                            <h2 className="text-xl font-semibold">Recent Logs</h2>
                            <div className="mt-4">
                                <ul className="space-y-2">
                                    <li className="text-gray-600">Log entry 1: System restart initiated.</li>
                                    <li className="text-gray-600">Log entry 2: Memory optimization completed.</li>
                                    <li className="text-gray-600">Log entry 3: Network performance degraded.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="bg-gray-800 text-white p-4 text-center">
                    <p>&copy; 2024 Monitoring Dashboard. All Rights Reserved.</p>
                </footer>
            </div>
        );
    }
}

    export default OpenTelemetryLanding;
