import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {
    let service: UniqueIdService;
    beforeEach(() => {
        service = new UniqueIdService();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} deve gerar um id quando for chamado com prefixo`, () => {
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();
    }); 

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} não deve gerar ids duplicados`, () => {
        const ids = new Set();
       for (let i = 0; i < 50; i++) {
           ids.add(service.generateUniqueIdWithPrefix('app'));
       }
       expect(ids.size).toBe(50);
    });

    it(`#${UniqueIdService.prototype.getNumberOfGenerateIds.name} deve retornar o total de ids gerados`, () => {
        service.generateUniqueIdWithPrefix('app');
        service.generateUniqueIdWithPrefix('app');
        expect(service.getNumberOfGenerateIds()).toBe(2);
    });
    it(`#${UniqueIdService.prototype.getNumberOfGenerateIds.name} deve retornar o excecao throw`, () => {
        // toda vez que quiser testar um metodo que lanca uma excecao, ele deve ser invocado atraves de outra funcao.
        const emptyValues = [null, undefined, '', '0', '1'];
        emptyValues.forEach(value => {
            expect(() => service.generateUniqueIdWithPrefix(value))
            .withContext(`empty values: ${emptyValues}`)
            .toThrow();
            // withContext, serve para quando estiver usando um for e ele vai especificar qual item falhou no teste
        });
    });

});