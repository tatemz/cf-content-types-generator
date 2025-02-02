import { renderPropAny } from '../../../src/renderer/field';

describe('A renderPropAny function', () => {
    it('can evaluate a "Symbol" type', () => {
        const field = JSON.parse(`
        {
          "id": "internalName",
          "name": "Internal name",
          "type": "Symbol",
          "localized": false,
          "required": false,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        }
        `);

        expect(renderPropAny(field)).toEqual('Contentful.EntryFields.Symbol');
    });

    it('can evaluate a "Symbol" type with "in" validation', () => {
        const field = JSON.parse(`
        {
          "id": "headerAlignment",
          "name": "Header alignment",
          "type": "Symbol",
          "localized": false,
          "required": false,
          "validations": [
            {
              "in": [
                "Left-aligned",
                "Center-aligned"
              ]
            }
          ],
          "disabled": false,
          "omitted": false
        }
        `);

        expect(renderPropAny(field)).toEqual('"Center-aligned" | "Left-aligned"');
    });

    it('can evaluate a "Symbol" type with missing validations', () => {
      const field = JSON.parse(`
      {
        "id": "internalName",
        "name": "Internal name",
        "type": "Symbol",
        "localized": false,
        "required": false,
        "disabled": false,
        "omitted": false
      }
      `);

      expect(renderPropAny(field)).toEqual('Contentful.EntryFields.Symbol');
    });

});
