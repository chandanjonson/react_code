
import React from 'react';
import { useStore } from '../lib/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const Traces = () => {
    const { traces } = useStore();

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Traces</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Traces</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm text-left">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Trace ID</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Root Service</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Name</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Duration</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Time</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {traces.map((trace) => (
                                    <tr key={trace.traceId} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle font-mono">{trace.traceId}</td>
                                        <td className="p-4 align-middle">{trace.rootService}</td>
                                        <td className="p-4 align-middle">{trace.name}</td>
                                        <td className="p-4 align-middle">{trace.duration}</td>
                                        <td className="p-4 align-middle">
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${trace.status === 'error'
                                                    ? 'bg-red-50 text-red-700 ring-red-600/20'
                                                    : 'bg-green-50 text-green-700 ring-green-600/20'
                                                }`}>
                                                {trace.status}
                                            </span>
                                        </td>
                                        <td className="p-4 align-middle">{trace.startTime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Traces;
