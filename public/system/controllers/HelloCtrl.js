'use strict';

define(['controllers/_controllers'], function(controllers) {
    controllers.controller('HelloCtrl', ['$scope', '$location', '$sce',
        function($scope, $location, $sce) {
            $scope.greeting = {
                text: 'Hello'
            };

            var html = '<p style="color:blue">하나의 HTML\n'
                + '<em onmouseover="this.textContent = \'PWN3D!\'">이걸 클릭하세요.</em>\n'
                + '코드 조각<p>링크 품은 텍스트: http://angularjs.org/ & mailto:us@there.org';

            $scope.myHTMLContent = html;
            $scope.myUnsafeHTMLContent = $sce.trustAsHtml(html);

            // $location: http://docs.angularjs.org/api/ng.$location
            // alert($location.absUrl());
        }
    ]);
});