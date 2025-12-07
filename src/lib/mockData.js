
import { faker } from '@faker-js/faker';

// --- Data Models ---

export const generateApp = (name, environment) => ({
    id: faker.string.uuid(),
    name,
    environment, // 'Production', 'Staging'
    language: faker.helpers.arrayElement(['Node.js', 'Python', 'Go', 'Java']),
    status: 'active',
    apiKey: `otel_${faker.string.alphanumeric(16)}`,
    createdAt: new Date().toISOString(),
});

export const generateMetrics = (appId) => {
    const dataPoints = [];
    const now = Date.now();
    for (let i = 0; i < 20; i++) {
        dataPoints.push({
            timestamp: new Date(now - (20 - i) * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            cpu: faker.number.int({ min: 10, max: 80 }),
            memory: faker.number.int({ min: 200, max: 1024 }), // MB
            requests: faker.number.int({ min: 50, max: 500 }),
            latency: faker.number.int({ min: 20, max: 200 }), // ms
        });
    }
    return dataPoints;
};

export const generateTrace = (appId, serviceName) => {
    const traceId = faker.string.hexadecimal({ length: 32, case: 'lower' }).slice(2);
    const startTime = Date.now() - faker.number.int({ min: 0, max: 3600000 });
    const duration = faker.number.int({ min: 50, max: 1500 });

    // Generate Spans
    const rootSpanId = faker.string.hexadecimal({ length: 16, case: 'lower' }).slice(2);
    const spans = [
        {
            id: rootSpanId,
            traceId,
            parentId: null,
            name: `GET /api/${faker.word.noun()}`,
            service: serviceName,
            startTime: startTime,
            endTime: startTime + duration,
            duration: duration,
            status: faker.helpers.arrayElement(['ok', 'ok', 'ok', 'error']),
        }
    ];

    // Child spans
    const numChildren = faker.number.int({ min: 2, max: 5 });
    let currentStartTime = startTime + faker.number.int({ min: 5, max: 50 });

    for (let i = 0; i < numChildren; i++) {
        const spanDuration = faker.number.int({ min: 10, max: duration / numChildren });
        spans.push({
            id: faker.string.hexadecimal({ length: 16, case: 'lower' }).slice(2),
            traceId,
            parentId: rootSpanId,
            name: faker.helpers.arrayElement(['db.query', 'redis.get', 'kafka.publish', 'external.call']),
            service: serviceName,
            startTime: currentStartTime,
            endTime: currentStartTime + spanDuration,
            duration: spanDuration,
            status: 'ok',
        });
        currentStartTime += spanDuration + faker.number.int({ min: 5, max: 20 });
    }

    return {
        traceId,
        rootService: serviceName,
        name: spans[0].name,
        startTime: new Date(startTime).toLocaleString(),
        duration: `${duration}ms`,
        status: spans[0].status,
        spans,
    };
};

export const initialApps = [
    generateApp('Payment-Service', 'Production'),
    generateApp('Auth-Service', 'Production'),
    generateApp('Inventory-Service', 'Staging')
];
