if(window.location.href.indexOf('test-lab-form-via-alex') > -1) {
	    $("#appendMeds").fadeIn();

	    var formData = {};

        $.ajax({
            url : ,
            type: "POST",
            data : formData,
            success: function(data, textStatus, jqXHR)
            {
                var input = document.getElementById("medicationSearch");
                var awesomeplete = new Awesomplete(input);
                awesomeplete.list = [data.data];
            },
            error: function (jqXHR, textStatus, errorThrown)
            {

            }
        });

        $("#medicationSearch").on('awesomplete-selectcomplete', function() {
            $("#fld_7273872_1").append(", "+this.value);
            $("#medicationSearch").val("");
        });


    }

    if(window.location.href.indexOf('admin-reverify-campaign-2019-draft') > -1) {
        $('#appendMeLarge').css('display', '');
        var pageUrl = window.location.search.substring(1);
        var variables = pageUrl.split('&');
        console.log(variables);
        if(variables.length > 0){
            var param = variables[0].split('=')[1];
            console.log(variables[0]);
            $('#appendMeLarge').append('<h5 style="text-decoration:underline;font-weight:800;">Sub ID (Parent ID)</h5><p>'+param+'</p>');

            $.ajax({
                url: ''+param,
                type: "POST",
                data: {},
                success: function(data, textStatus, jqXHR)
                {
                    var dataParse = JSON.parse(data);
                    console.log(dataParse);
                    for(var i = 0; i < dataParse.attributes.length; i++)
                        $('#appendMeLarge').append('<h5 style="font-weight: 800; text-decoration:underline;">'+dataParse.attributes[i].name+'</h5><p>'+dataParse.attributes[i].value+'</p>');
                }
            });

        }
    }
	
	if(window.location.href.indexOf('lab-corp-services-follow-up-call') > -1){
		
		$('#appendMe').css('display', '');
		var pageUrl = window.location.search.substring(1);
		var variables = pageUrl.split('&');
		console.log(variables);
		
		
			if(variables.length > 0){
				var param = variables[0].split('=')[1];
				console.log(variables[0]);
				$('#appendMe').append('<h5 style="text-decoration:underline;font-weight:800;">Customer ID</h5><p>'+param+'</p>');
				
				$.ajax({
					url: ''+param,
					type: "POST",
					data: {},
					success: function(data, textStatus, jqXHR)
					{
						
						var dataParse = JSON.parse(data);
						console.log(dataParse);
						for(var i = 0; i < dataParse.attributes.length; i++)
						$('#appendMe').append('<h5 style="font-weight: 800; text-decoration:underline;">'+dataParse.attributes[i].name+'</h5><p>'+dataParse.attributes[i].value+'</p>');	
					}
				});
				
			}
	}
	else if(window.location.href.indexOf('lab-corp-services-follow-up-s') > -1){

        $('#appendMe').css('display', '');
        var pageUrl = window.location.search.substring(1);
        var variables = pageUrl.split('&');
        console.log(variables);


        if(variables.length > 0){
            var param = variables[0].split('=')[1];
            console.log(variables[0]);
            $('#appendMe').append('<h5 style="text-decoration:underline;font-weight:800;">Customer ID</h5><p>'+param+'</p>');

            $.ajax({
                url: ''+param,
                type: "POST",
                data: {},
                success: function(data, textStatus, jqXHR)
                {

                    var dataParse = JSON.parse(data);
                    console.log(dataParse);
                    for(var i = 0; i < dataParse.attributes.length; i++)
                        $('#appendMe').append('<h5 style="font-weight: 800; text-decoration:underline;">'+dataParse.attributes[i].name+'</h5><p>'+dataParse.attributes[i].value+'</p>');
                }
            });

        }
    }
    else if(window.location.href.indexOf('real-time-physicians-follow-up-c') > -1) {
        $('#appendMe').css('display', '');
        var pageUrl = window.location.search.substring(1);
        var variables = pageUrl.split('&');
        console.log(variables);


        if(variables.length > 0){
            var param = variables[0].split('=')[1];
            console.log(variables[0]);

            $.ajax({
                url: ''+param,
                type: "POST",
                data: {},
                success: function(data, textStatus, jqXHR)
                {

                    var dataParse = JSON.parse(data);
                    console.log(dataParse);
                    for(var i = 0; i < dataParse.attributes.length; i++)
                        $('#appendMe').append('<h5 style="font-weight: 800; text-decoration:underline;">'+dataParse.attributes[i].name+'</h5><p>'+dataParse.attributes[i].value+'</p>');
                }
            });

        }
    }
    else if(window.location.href.indexOf('real-time-physicians-welcome-call-form') > -1) {
        $('#appendMe').css('display', '');
        var pageUrl = window.location.search.substring(1);
        var variables = pageUrl.split('&');
        console.log(variables);


        if(variables.length > 0){
            var param = variables[0].split('=')[1];
            console.log(variables[0]);
            $.ajax({
                url: ''+param,
                type: "POST",
                data: {},
                success: function(data, textStatus, jqXHR)
                {
                    console.log("RETURNED WELCOME");
                    var dataParse = JSON.parse(data);
                    console.log(dataParse);
                    for(var i = 0; i < dataParse.attributes.length; i++)
                        $('#appendMe').append('<h5 style="font-weight: 800; text-decoration:underline;">'+dataParse.attributes[i].name+'</h5><p>'+dataParse.attributes[i].value+'</p>');
                }
            });

        }
    }
	else{
		
	}

    if($("#fld_6691611_1").length == 0) {

    }
    else {
        $("#fld_6691611_1").mask("99/99/9999");
    }
    if($(".needPhoneData").length == 0) {
        // proceed as normal
        console.log('empty');
    }
    else {
        console.log('found');
        $('#appendMe').html('<div style="position: fixed; top: 45px; right: 15px; background: #000; width: 150px; min-height: 500px; color: #fff; padding: 15px;" id="showProducts"><h5>Requested Products:</h5></div>');

        $("#fld_6691611_1").focus(function() {
            console.log('in');
        }).blur(function() {
            var phone = $("#fld_6763826_1").val();
            var dob = $("#fld_6691611_1").val();
            var formData = {phone: phone, dob: dob};

            $.ajax({
                url :,
                type: "POST",
                data : formData,
                success: function(data, textStatus, jqXHR)
                {
                    $("#showProducts").empty();
                    if(data.status == "success") {
                        console.log(data.products);
                        var commas = data.products;
                        arr = commas.split(', ');
                        for(i=0; i < arr.length; i++) {
                            if(arr[i] == "PGX Pharmacy") {

                            }
                            else if(arr[i] == "Migraine Spray") {

                            }
                            else if(arr[i] == "Genetic (DNA)") {
                                $("#showProducts").append("PGX<br>");
                            }
                            else {
                                $("#showProducts").append(arr[i]+"<br>");
                            }
                        }
						
						if(data.meds){
							
							console.log(data.meds);						
							var meds = data.meds;
							meds = meds.split(', ').join('<br />');
							$('#showProducts').append('<br /><br /><h5>Current Medications:</h5>'+meds);							
						}
						
						
						

                    }
                    else if(data.status == "danger") {
                        console.log('not found');
                        $("#showProducts").append("<font color='red'>No products found for phone number.</font>");
                    }
                    else if(data.status == "emptyPhone") {
                        $("#showProducts").append("<font color='red'>No phone number entered.</font>");
                    }
                    else if(data.status == "emptyDob") {
                        $("#showProducts").append("<font color='red'>No date of birth entered.</font>");
                    }
                    else {
                        console.log('???');
                        alert("ERROR! We could not contact the system to check for this patient's products");
                    }
                },
                error: function (data, jqXHR, textStatus, errorThrown)
                {
                    alert("ERROR! We could not contact the system to check for this patient's products");
                }
            });
        });

    }

    $( '.caldera_forms_form' ).submit(function(e){
   
        $(this).prop('disabled', true);
        
    });
