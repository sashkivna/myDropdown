describe('Form', function () {
    var element,
        $rootScope;

    beforeEach(module('MyApp1', 'foo'));

    beforeEach(inject(function ($compile, _$rootScope_, $templateCache, $controller) {
        $rootScope = _$rootScope_;

        $controller('MyController', {$scope: $rootScope});

        $rootScope.fields = [];
        $rootScope.field = {};

        element = $compile($templateCache.get('components/form-add-fields/form-add-field.template.html'))($rootScope);

        $('body').append(element);

        $rootScope.$apply();
    }));

    function addField() {
        element.find('.add-filed').trigger('click');
    }

    function deleteField() {
        element.find('.deleteIcon').click();
    }

    afterEach(function () {
        element.remove();
        $rootScope.$destroy();
    });

    it('should add and remove field', function () {
        addField();

        expect(element.find('.added').length).toBe(1);

        deleteField();

        expect(element.find('.added').length).toBe(0);
    });

    it('should say "Field is required" if field is empty', function () {
        addField();

        element.find('.added').trigger('click');
        element.find('body').trigger('click');

        expect(element.find('.warning').length).toBe(1);
    });

    it('should disable Save button while all fields invalid', function () {
        addField();

        expect($('.submit').is(':disabled')).toBe(true);

        $('.added').val($('.added').val() + 'more text');

        element.find('.added').trigger("change");
        element.find('.submit').click();

        expect($('.submit').is(':disabled')).toBe(false);
    });
});