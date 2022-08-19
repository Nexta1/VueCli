import { viteMockServe } from 'vite-plugin-mock'
export default function setupMockPlugin(isBuilding: boolean){
    return viteMockServe({
        mockPath: 'mock',
        localEnabled: !isBuilding,
    })
}