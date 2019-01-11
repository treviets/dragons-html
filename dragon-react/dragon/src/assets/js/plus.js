import $ from "jquery";
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
// $(document).ready(function() {
//
//     $('.btn-minuse').on('click', function(){            $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1)
//     })
//
//     $('.btn-pluss').on('click', function(){            $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
//     })
//
// });
$(document).on('click','.value-control',function(){
    var count = 1;
    var countEl = document.getElementById("count");
    function plus(){
        count++;
        countEl.value = count;
    }
    function minus(){
        if (count > 1) {
            count--;
            countEl.value = count;
        }
    }

})
