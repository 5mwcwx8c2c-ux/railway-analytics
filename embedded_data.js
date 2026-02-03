const rawData = [
  {
    "mass_ton": 18280.33297, 
    "month": "styczeń/ January", 
    "distance_km": 201.03922111038773, 
    "year": 2012, 
    "work_mln_tkm": 3675.0639019273403, 
    "mass_mln_ton": 18.28033297
  }, 
  {
    "mass_ton": 16735.762776999996, 
    "month": "luty/ February", 
    "distance_km": 199.7701561482942, 
    "year": 2012, 
    "work_mln_tkm": 3343.3059432221, 
    "mass_mln_ton": 16.735762776999998
  }, 
  {
    "mass_ton": 19927.732819999997, 
    "month": "marzec/ March", 
    "distance_km": 211.09759456043332, 
    "year": 2012, 
    "work_mln_tkm": 4206.696463345001, 
    "mass_mln_ton": 19.92773282
  }, 
  {
    "mass_ton": 18563.035990000004, 
    "month": "kwiecień/ April", 
    "distance_km": 217.2788491011857, 
    "year": 2012, 
    "work_mln_tkm": 4033.35509573109, 
    "mass_mln_ton": 18.563035990000003
  }, 
  {
    "mass_ton": 19635.20369, 
    "month": "maj/ May", 
    "distance_km": 217.58465908699063, 
    "year": 2012, 
    "work_mln_tkm": 4272.31910099227, 
    "mass_mln_ton": 19.635203689999997
  }, 
  {
    "mass_ton": 18471.474299999998, 
    "month": "czerwiec/ June", 
    "distance_km": 219.8665739465637, 
    "year": 2012, 
    "work_mln_tkm": 4061.2597700830006, 
    "mass_mln_ton": 18.471474299999997
  }, 
  {
    "mass_ton": 19096.975914, 
    "month": "lipiec/ July", 
    "distance_km": 210.69684049034407, 
    "year": 2012, 
    "work_mln_tkm": 4023.6724879999997, 
    "mass_mln_ton": 19.096975913999998
  }, 
  {
    "mass_ton": 19907.217998, 
    "month": "sierpień/ August", 
    "distance_km": 215.51914876019637, 
    "year": 2012, 
    "work_mln_tkm": 4290.38667711262, 
    "mass_mln_ton": 19.907217998
  }, 
  {
    "mass_ton": 20252.367492999998, 
    "month": "wrzesień/ September", 
    "distance_km": 218.733083839012, 
    "year": 2012, 
    "work_mln_tkm": 4429.86279678485, 
    "mass_mln_ton": 20.252367492999998
  }, 
  {
    "mass_ton": 21687.461432, 
    "month": "październik/ October", 
    "distance_km": 216.29445651279718, 
    "year": 2012, 
    "work_mln_tkm": 4690.87768357669, 
    "mass_mln_ton": 21.687461432
  }, 
  {
    "mass_ton": 20864.486467, 
    "month": "listopad/ November", 
    "distance_km": 208.13348029147923, 
    "year": 2012, 
    "work_mln_tkm": 4342.598182871179, 
    "mass_mln_ton": 20.864486467
  }, 
  {
    "mass_ton": 17877.336984999998, 
    "month": "grudzień/ December", 
    "distance_km": 206.64078398147734, 
    "year": 2012, 
    "work_mln_tkm": 3694.18693008146, 
    "mass_mln_ton": 17.877336985
  }, 
  {
    "mass_ton": 17144.1498, 
    "month": "styczeń/ January", 
    "distance_km": 195.34135331087268, 
    "year": 2013, 
    "work_mln_tkm": 3348.961423296327, 
    "mass_mln_ton": 17.1441498
  }, 
  {
    "mass_ton": 16512.311138, 
    "month": "luty/ February", 
    "distance_km": 202.79835515501537, 
    "year": 2013, 
    "work_mln_tkm": 3348.6695385942403, 
    "mass_mln_ton": 16.512311138
  }, 
  {
    "mass_ton": 18913.622167999998, 
    "month": "marzec/ March", 
    "distance_km": 213.37558103379112, 
    "year": 2013, 
    "work_mln_tkm": 4035.705119550592, 
    "mass_mln_ton": 18.913622167999996
  }, 
  {
    "mass_ton": 18575.647677999998, 
    "month": "kwiecień/ April", 
    "distance_km": 215.3351433256864, 
    "year": 2013, 
    "work_mln_tkm": 3999.9897551095837, 
    "mass_mln_ton": 18.575647678
  }, 
  {
    "mass_ton": 19057.635517, 
    "month": "maj/ May", 
    "distance_km": 223.8382693797738, 
    "year": 2013, 
    "work_mln_tkm": 4265.82815259579, 
    "mass_mln_ton": 19.057635516999998
  }, 
  {
    "mass_ton": 19032.692501999994, 
    "month": "czerwiec/ June", 
    "distance_km": 229.65005717345656, 
    "year": 2013, 
    "work_mln_tkm": 4370.858921249117, 
    "mass_mln_ton": 19.032692501999996
  }, 
  {
    "mass_ton": 20380.305773999997, 
    "month": "lipiec/ July", 
    "distance_km": 226.69297745469046, 
    "year": 2013, 
    "work_mln_tkm": 4620.072197345079, 
    "mass_mln_ton": 20.380305773999996
  }, 
  {
    "mass_ton": 20351.120783999995, 
    "month": "sierpień/ August", 
    "distance_km": 225.00682068321015, 
    "year": 2013, 
    "work_mln_tkm": 4579.140984947838, 
    "mass_mln_ton": 20.351120783999995
  }, 
  {
    "mass_ton": 20503.462723999997, 
    "month": "wrzesień/ September", 
    "distance_km": 228.6877449646796, 
    "year": 2013, 
    "work_mln_tkm": 4688.890654318927, 
    "mass_mln_ton": 20.503462724
  }, 
  {
    "mass_ton": 22465.629469, 
    "month": "październik/ October", 
    "distance_km": 220.861255875761, 
    "year": 2013, 
    "work_mln_tkm": 4961.787138562846, 
    "mass_mln_ton": 22.465629469
  }, 
  {
    "mass_ton": 20671.291185000002, 
    "month": "listopad/ November", 
    "distance_km": 218.2735150335681, 
    "year": 2013, 
    "work_mln_tkm": 4511.995387232361, 
    "mass_mln_ton": 20.671291185
  }, 
  {
    "mass_ton": 19557.530235, 
    "month": "grudzień/ December", 
    "distance_km": 213.11588376495192, 
    "year": 2013, 
    "work_mln_tkm": 4168.020340291792, 
    "mass_mln_ton": 19.557530234999998
  }, 
  {
    "mass_ton": 17752.589734, 
    "month": "styczeń/ January", 
    "distance_km": 208.47465631597677, 
    "year": 2014, 
    "work_mln_tkm": 3700.965043514188, 
    "mass_mln_ton": 17.752589734
  }, 
  {
    "mass_ton": 16809.841736000002, 
    "month": "luty/ February", 
    "distance_km": 209.67742039479043, 
    "year": 2014, 
    "work_mln_tkm": 3524.644252449166, 
    "mass_mln_ton": 16.809841736000003
  }, 
  {
    "mass_ton": 19033.032006999998, 
    "month": "marzec/ March", 
    "distance_km": 220.80005852354805, 
    "year": 2014, 
    "work_mln_tkm": 4202.494581026163, 
    "mass_mln_ton": 19.033032007
  }, 
  {
    "mass_ton": 18514.587388, 
    "month": "kwiecień/ April", 
    "distance_km": 225.66318619635882, 
    "year": 2014, 
    "work_mln_tkm": 4178.060781087001, 
    "mass_mln_ton": 18.514587388
  }, 
  {
    "mass_ton": 18752.443326, 
    "month": "maj/ May", 
    "distance_km": 228.32786219799482, 
    "year": 2014, 
    "work_mln_tkm": 4281.705295614635, 
    "mass_mln_ton": 18.752443326
  }, 
  {
    "mass_ton": 17915.001718000003, 
    "month": "czerwiec/ June", 
    "distance_km": 223.4199539944976, 
    "year": 2014, 
    "work_mln_tkm": 4002.5688596469063, 
    "mass_mln_ton": 17.915001718000003
  }, 
  {
    "mass_ton": 19609.464468000002, 
    "month": "lipiec/ July", 
    "distance_km": 222.88637098393517, 
    "year": 2014, 
    "work_mln_tkm": 4370.682372210943, 
    "mass_mln_ton": 19.609464468000002
  }, 
  {
    "mass_ton": 19155.334357999996, 
    "month": "sierpień/ August", 
    "distance_km": 225.75365092602368, 
    "year": 2014, 
    "work_mln_tkm": 4324.3866660272, 
    "mass_mln_ton": 19.155334357999998
  }, 
  {
    "mass_ton": 20966.9675, 
    "month": "wrzesień/ September", 
    "distance_km": 217.29173043264365, 
    "year": 2014, 
    "work_mln_tkm": 4555.94865, 
    "mass_mln_ton": 20.9669675
  }, 
  {
    "mass_ton": 21791.008, 
    "month": "październik/ October", 
    "distance_km": 213.86956652028215, 
    "year": 2014, 
    "work_mln_tkm": 4660.433435000001, 
    "mass_mln_ton": 21.791008
  }, 
  {
    "mass_ton": 20046.453, 
    "month": "listopad/ November", 
    "distance_km": 218.840416097551, 
    "year": 2014, 
    "work_mln_tkm": 4386.9741158, 
    "mass_mln_ton": 20.046453
  }, 
  {
    "mass_ton": 18519.295449999998, 
    "month": "grudzień/ December", 
    "distance_km": 211.06457475951117, 
    "year": 2014, 
    "work_mln_tkm": 3908.767219, 
    "mass_mln_ton": 18.519295449999998
  }, 
  {
    "mass_ton": 16283.896507999998, 
    "month": "styczeń/ January", 
    "distance_km": 212.24683952917076, 
    "year": 2015, 
    "work_mln_tkm": 3456.2055690431, 
    "mass_mln_ton": 16.283896507999998
  }, 
  {
    "mass_ton": 15314.953973, 
    "month": "luty/ February", 
    "distance_km": 235.20818222908176, 
    "year": 2015, 
    "work_mln_tkm": 3602.2024849113836, 
    "mass_mln_ton": 15.314953973
  }, 
  {
    "mass_ton": 18811.032716, 
    "month": "marzec/ March", 
    "distance_km": 225.99961650949157, 
    "year": 2015, 
    "work_mln_tkm": 4251.286179963499, 
    "mass_mln_ton": 18.811032716
  }, 
  {
    "mass_ton": 18125.055679999998, 
    "month": "kwiecień/ April", 
    "distance_km": 224.05749789147063, 
    "year": 2015, 
    "work_mln_tkm": 4061.054624804388, 
    "mass_mln_ton": 18.12505568
  }, 
  {
    "mass_ton": 18868.427636, 
    "month": "maj/ May", 
    "distance_km": 230.5651637435593, 
    "year": 2015, 
    "work_mln_tkm": 4350.40210747784, 
    "mass_mln_ton": 18.868427636
  }, 
  {
    "mass_ton": 18790.265628, 
    "month": "czerwiec/ June", 
    "distance_km": 223.59169653912525, 
    "year": 2015, 
    "work_mln_tkm": 4201.347370185332, 
    "mass_mln_ton": 18.790265628
  }, 
  {
    "mass_ton": 19378.776366000002, 
    "month": "lipiec/ July", 
    "distance_km": 224.25794860837667, 
    "year": 2015, 
    "work_mln_tkm": 4345.844634379652, 
    "mass_mln_ton": 19.378776366
  }, 
  {
    "mass_ton": 18822.822955, 
    "month": "sierpień/ August", 
    "distance_km": 224.99282829330616, 
    "year": 2015, 
    "work_mln_tkm": 4235.000173109616, 
    "mass_mln_ton": 18.822822955
  }, 
  {
    "mass_ton": 20619.231928999998, 
    "month": "wrzesień/ September", 
    "distance_km": 224.6541498978591, 
    "year": 2015, 
    "work_mln_tkm": 4632.196020556288, 
    "mass_mln_ton": 20.619231928999998
  }, 
  {
    "mass_ton": 21283.018085999996, 
    "month": "październik/ October", 
    "distance_km": 226.53957500125293, 
    "year": 2015, 
    "work_mln_tkm": 4821.445871946418, 
    "mass_mln_ton": 21.283018085999995
  }, 
  {
    "mass_ton": 20116.628067, 
    "month": "listopad/ November", 
    "distance_km": 227.61192912416328, 
    "year": 2015, 
    "work_mln_tkm": 4578.784521803158, 
    "mass_mln_ton": 20.116628067
  }, 
  {
    "mass_ton": 18363.185795000005, 
    "month": "grudzień/ December", 
    "distance_km": 221.6262493498257, 
    "year": 2015, 
    "work_mln_tkm": 4069.763993859848, 
    "mass_mln_ton": 18.363185795000003
  }, 
  {
    "mass_ton": 15696.166533, 
    "month": "styczeń/ January", 
    "distance_km": 218.04940167393312, 
    "year": 2016, 
    "work_mln_tkm": 3422.5397210950628, 
    "mass_mln_ton": 15.696166533
  }, 
  {
    "mass_ton": 16430.478156, 
    "month": "luty/ February", 
    "distance_km": 228.53268343031164, 
    "year": 2016, 
    "work_mln_tkm": 3754.9012630337984, 
    "mass_mln_ton": 16.430478156
  }, 
  {
    "mass_ton": 17784.613979999995, 
    "month": "marzec/ March", 
    "distance_km": 236.8576899421849, 
    "year": 2016, 
    "work_mln_tkm": 4212.4225838162865, 
    "mass_mln_ton": 17.784613979999996
  }, 
  {
    "mass_ton": 17591.229554999998, 
    "month": "kwiecień/ April", 
    "distance_km": 236.06129442862374, 
    "year": 2016, 
    "work_mln_tkm": 4152.608419344363, 
    "mass_mln_ton": 17.591229554999998
  }, 
  {
    "mass_ton": 17557.409825999996, 
    "month": "maj/ May", 
    "distance_km": 235.9152767916491, 
    "year": 2016, 
    "work_mln_tkm": 4142.061198845209, 
    "mass_mln_ton": 17.557409825999997
  }, 
  {
    "mass_ton": 18709.163081, 
    "month": "czerwiec/ June", 
    "distance_km": 227.6268676528203, 
    "year": 2016, 
    "work_mln_tkm": 4258.708188533818, 
    "mass_mln_ton": 18.709163081
  }, 
  {
    "mass_ton": 18826.831574, 
    "month": "lipiec/ July", 
    "distance_km": 223.62439028506415, 
    "year": 2016, 
    "work_mln_tkm": 4210.138731735345, 
    "mass_mln_ton": 18.826831574
  }, 
  {
    "mass_ton": 19186.78993199999, 
    "month": "sierpień/ August", 
    "distance_km": 228.36920867355983, 
    "year": 2016, 
    "work_mln_tkm": 4381.672033756662, 
    "mass_mln_ton": 19.18678993199999
  }, 
  {
    "mass_ton": 20030.220548999994, 
    "month": "wrzesień/ September", 
    "distance_km": 224.355833414214, 
    "year": 2016, 
    "work_mln_tkm": 4493.89682474141, 
    "mass_mln_ton": 20.030220548999996
  }, 
  {
    "mass_ton": 20586.721414, 
    "month": "październik/ October", 
    "distance_km": 229.77870950308008, 
    "year": 2016, 
    "work_mln_tkm": 4730.390279408344, 
    "mass_mln_ton": 20.586721414
  }, 
  {
    "mass_ton": 20147.665136999996, 
    "month": "listopad/ November", 
    "distance_km": 222.85457231576595, 
    "year": 2016, 
    "work_mln_tkm": 4489.999297267403, 
    "mass_mln_ton": 20.147665136999997
  }, 
  {
    "mass_ton": 19678.042307, 
    "month": "grudzień/ December", 
    "distance_km": 222.11714123050626, 
    "year": 2016, 
    "work_mln_tkm": 4370.830502243796, 
    "mass_mln_ton": 19.678042307
  }, 
  {
    "mass_ton": 17060.9747632, 
    "month": "styczeń/ January", 
    "distance_km": 217.54991716051933, 
    "year": 2017, 
    "work_mln_tkm": 3711.6136464118713, 
    "mass_mln_ton": 17.0609747632
  }, 
  {
    "mass_ton": 16823.232511000002, 
    "month": "luty/ February", 
    "distance_km": 228.5380541923173, 
    "year": 2017, 
    "work_mln_tkm": 3844.748823288872, 
    "mass_mln_ton": 16.823232511
  }, 
  {
    "mass_ton": 20395.359631400002, 
    "month": "marzec/ March", 
    "distance_km": 223.64741891376033, 
    "year": 2017, 
    "work_mln_tkm": 4561.369539380512, 
    "mass_mln_ton": 20.3953596314
  }, 
  {
    "mass_ton": 19333.04022, 
    "month": "kwiecień/ April", 
    "distance_km": 229.64134215599182, 
    "year": 2017, 
    "work_mln_tkm": 4439.665304076571, 
    "mass_mln_ton": 19.333040219999997
  }, 
  {
    "mass_ton": 20471.874878, 
    "month": "maj/ May", 
    "distance_km": 227.7599355769772, 
    "year": 2017, 
    "work_mln_tkm": 4662.672903353218, 
    "mass_mln_ton": 20.471874877999998
  }, 
  {
    "mass_ton": 20067.253, 
    "month": "czerwiec/ June", 
    "distance_km": 229.67195623411138, 
    "year": 2017, 
    "work_mln_tkm": 4608.88525275484, 
    "mass_mln_ton": 20.067253
  }, 
  {
    "mass_ton": 20540.429974640003, 
    "month": "lipiec/ July", 
    "distance_km": 231.28279379518753, 
    "year": 2017, 
    "work_mln_tkm": 4750.648030289152, 
    "mass_mln_ton": 20.540429974640002
  }, 
  {
    "mass_ton": 21046.363952, 
    "month": "sierpień/ August", 
    "distance_km": 228.71438231835896, 
    "year": 2017, 
    "work_mln_tkm": 4813.606131329056, 
    "mass_mln_ton": 21.046363952
  }, 
  {
    "mass_ton": 20872.420913999995, 
    "month": "wrzesień/ September", 
    "distance_km": 229.25658901462296, 
    "year": 2017, 
    "work_mln_tkm": 4785.140023221118, 
    "mass_mln_ton": 20.872420913999996
  }, 
  {
    "mass_ton": 21710.216721999997, 
    "month": "październik/ October", 
    "distance_km": 231.46793767209385, 
    "year": 2017, 
    "work_mln_tkm": 5025.2190910555455, 
    "mass_mln_ton": 21.710216722
  }, 
  {
    "mass_ton": 21402.215237, 
    "month": "listopad/ November", 
    "distance_km": 231.4016666482264, 
    "year": 2017, 
    "work_mln_tkm": 4952.508275805866, 
    "mass_mln_ton": 21.402215237
  }, 
  {
    "mass_ton": 20162.0328574, 
    "month": "grudzień/ December", 
    "distance_km": 231.7698816454631, 
    "year": 2017, 
    "work_mln_tkm": 4672.951969091537, 
    "mass_mln_ton": 20.1620328574
  }, 
  {
    "mass_ton": 20877.524968, 
    "month": "styczeń/ January", 
    "distance_km": 229.32814056303235, 
    "year": 2018, 
    "work_mln_tkm": 4787.803980469722, 
    "mass_mln_ton": 20.877524968000003
  }, 
  {
    "mass_ton": 19373.534062, 
    "month": "luty/ February", 
    "distance_km": 233.82862896380908, 
    "year": 2018, 
    "work_mln_tkm": 4530.0869079011145, 
    "mass_mln_ton": 19.373534061999997
  }, 
  {
    "mass_ton": 21626.179219999998, 
    "month": "marzec/ March", 
    "distance_km": 232.54356908579717, 
    "year": 2018, 
    "work_mln_tkm": 5029.028901507901, 
    "mass_mln_ton": 21.626179219999997
  }, 
  {
    "mass_ton": 20451.927700000004, 
    "month": "kwiecień/ April", 
    "distance_km": 241.19597631424014, 
    "year": 2018, 
    "work_mln_tkm": 4932.922669109752, 
    "mass_mln_ton": 20.451927700000002
  }, 
  {
    "mass_ton": 20717.880653999997, 
    "month": "maj/ May", 
    "distance_km": 239.66572294737364, 
    "year": 2018, 
    "work_mln_tkm": 4965.365844878316, 
    "mass_mln_ton": 20.717880654
  }, 
  {
    "mass_ton": 20830.645803207586, 
    "month": "czerwiec/ June", 
    "distance_km": 236.04548736702716, 
    "year": 2018, 
    "work_mln_tkm": 4916.979940788053, 
    "mass_mln_ton": 20.830645803207585
  }, 
  {
    "mass_ton": 21170.233533883867, 
    "month": "lipiec/ July", 
    "distance_km": 240.87814459455686, 
    "year": 2018, 
    "work_mln_tkm": 5099.446574275415, 
    "mass_mln_ton": 21.170233533883867
  }, 
  {
    "mass_ton": 21132.759273647585, 
    "month": "sierpień/ August", 
    "distance_km": 241.92848212562564, 
    "year": 2018, 
    "work_mln_tkm": 5112.6163741998, 
    "mass_mln_ton": 21.132759273647586
  }, 
  {
    "mass_ton": 20597.135776447634, 
    "month": "wrzesień/ September", 
    "distance_km": 243.40378248628497, 
    "year": 2018, 
    "work_mln_tkm": 5013.420756370938, 
    "mass_mln_ton": 20.597135776447633
  }, 
  {
    "mass_ton": 22632.204211006356, 
    "month": "październik/ October", 
    "distance_km": 242.47440257240288, 
    "year": 2018, 
    "work_mln_tkm": 5487.730194960387, 
    "mass_mln_ton": 22.632204211006357
  }, 
  {
    "mass_ton": 21482.633626700117, 
    "month": "listopad/ November", 
    "distance_km": 238.81182035617198, 
    "year": 2018, 
    "work_mln_tkm": 5130.3068424369685, 
    "mass_mln_ton": 21.482633626700117
  }, 
  {
    "mass_ton": 19358.462950535202, 
    "month": "grudzień/ December", 
    "distance_km": 239.4985227713511, 
    "year": 2018, 
    "work_mln_tkm": 4636.323279777112, 
    "mass_mln_ton": 19.358462950535202
  }, 
  {
    "mass_ton": 19686.490666, 
    "month": "styczeń/ January", 
    "distance_km": 231.7805436397836, 
    "year": 2019, 
    "work_mln_tkm": 4562.945508925006, 
    "mass_mln_ton": 19.686490666
  }, 
  {
    "mass_ton": 19026.918831664996, 
    "month": "luty/ February", 
    "distance_km": 236.98154394295034, 
    "year": 2019, 
    "work_mln_tkm": 4509.028601205168, 
    "mass_mln_ton": 19.026918831664997
  }, 
  {
    "mass_ton": 21370.033613135005, 
    "month": "marzec/ March", 
    "distance_km": 241.46231020663225, 
    "year": 2019, 
    "work_mln_tkm": 5160.057685420962, 
    "mass_mln_ton": 21.370033613135003
  }, 
  {
    "mass_ton": 20171.183233213127, 
    "month": "kwiecień/ April", 
    "distance_km": 241.0245824777242, 
    "year": 2019, 
    "work_mln_tkm": 4861.751016866865, 
    "mass_mln_ton": 20.171183233213128
  }, 
  {
    "mass_ton": 19366.240114004002, 
    "month": "maj/ May", 
    "distance_km": 241.52309180217023, 
    "year": 2019, 
    "work_mln_tkm": 4677.39418891746, 
    "mass_mln_ton": 19.366240114004
  }, 
  {
    "mass_ton": 18586.88830499999, 
    "month": "czerwiec/ June", 
    "distance_km": 240.7879756595526, 
    "year": 2019, 
    "work_mln_tkm": 4475.49920877116, 
    "mass_mln_ton": 18.586888304999988
  }, 
  {
    "mass_ton": 20339.172510000004, 
    "month": "lipiec/ July", 
    "distance_km": 235.13932989569727, 
    "year": 2019, 
    "work_mln_tkm": 4782.539394634388, 
    "mass_mln_ton": 20.339172510000004
  }, 
  {
    "mass_ton": 19420.788704, 
    "month": "sierpień/ August", 
    "distance_km": 236.27671000184498, 
    "year": 2019, 
    "work_mln_tkm": 4588.680060622115, 
    "mass_mln_ton": 19.420788704
  }, 
  {
    "mass_ton": 19666.882635, 
    "month": "wrzesień/ September", 
    "distance_km": 232.21479722928376, 
    "year": 2019, 
    "work_mln_tkm": 4566.9411632186475, 
    "mass_mln_ton": 19.666882635
  }, 
  {
    "mass_ton": 21407.216663344083, 
    "month": "październik/ October", 
    "distance_km": 234.53888096606298, 
    "year": 2019, 
    "work_mln_tkm": 5020.824640818779, 
    "mass_mln_ton": 21.407216663344084
  }, 
  {
    "mass_ton": 19878.686740191715, 
    "month": "listopad/ November", 
    "distance_km": 233.03477593253393, 
    "year": 2019, 
    "work_mln_tkm": 4632.42531033361, 
    "mass_mln_ton": 19.878686740191714
  }, 
  {
    "mass_ton": 17475.76846066667, 
    "month": "grudzień/ December", 
    "distance_km": 232.74348305937147, 
    "year": 2019, 
    "work_mln_tkm": 4067.371220674672, 
    "mass_mln_ton": 17.47576846066667
  }, 
  {
    "mass_ton": 17178.494523549103, 
    "month": "styczeń/ January", 
    "distance_km": 226.96254382789397, 
    "year": 2020, 
    "work_mln_tkm": 3898.87481619825, 
    "mass_mln_ton": 17.1784945235491
  }, 
  {
    "mass_ton": 17842.746496999996, 
    "month": "luty/ February", 
    "distance_km": 231.5045734546292, 
    "year": 2020, 
    "work_mln_tkm": 4130.6774170470635, 
    "mass_mln_ton": 17.842746496999997
  }, 
  {
    "mass_ton": 19276.595120502, 
    "month": "marzec/ March", 
    "distance_km": 229.36880933492995, 
    "year": 2020, 
    "work_mln_tkm": 4421.449670821064, 
    "mass_mln_ton": 19.276595120501998
  }, 
  {
    "mass_ton": 16804.640695, 
    "month": "kwiecień/ April", 
    "distance_km": 225.64083974780243, 
    "year": 2020, 
    "work_mln_tkm": 3791.8132380798947, 
    "mass_mln_ton": 16.804640695
  }, 
  {
    "mass_ton": 16580.256027100007, 
    "month": "maj/ May", 
    "distance_km": 246.92073409647915, 
    "year": 2020, 
    "work_mln_tkm": 4094.008989719106, 
    "mass_mln_ton": 16.580256027100006
  }, 
  {
    "mass_ton": 17448.601136100002, 
    "month": "czerwiec/ June", 
    "distance_km": 238.17032741390082, 
    "year": 2020, 
    "work_mln_tkm": 4155.739045499499, 
    "mass_mln_ton": 17.448601136100002
  }, 
  {
    "mass_ton": 18445.063586, 
    "month": "lipiec/ July", 
    "distance_km": 231.20658993731195, 
    "year": 2020, 
    "work_mln_tkm": 4264.620252895947, 
    "mass_mln_ton": 18.445063586
  }, 
  {
    "mass_ton": 18850.628146999992, 
    "month": "sierpień/ August", 
    "distance_km": 238.10080468540778, 
    "year": 2020, 
    "work_mln_tkm": 4488.349730626096, 
    "mass_mln_ton": 18.85062814699999
  }, 
  {
    "mass_ton": 19652.882432899998, 
    "month": "wrzesień/ September", 
    "distance_km": 237.85730227925544, 
    "year": 2020, 
    "work_mln_tkm": 4674.581597500964, 
    "mass_mln_ton": 19.652882432899997
  }, 
  {
    "mass_ton": 20752.800721619995, 
    "month": "październik/ October", 
    "distance_km": 235.2214966331912, 
    "year": 2020, 
    "work_mln_tkm": 4881.504845069825, 
    "mass_mln_ton": 20.752800721619995
  }, 
  {
    "mass_ton": 20620.461903000003, 
    "month": "listopad/ November", 
    "distance_km": 234.27034353125606, 
    "year": 2020, 
    "work_mln_tkm": 4830.762693788988, 
    "mass_mln_ton": 20.620461903000002
  }, 
  {
    "mass_ton": 19788.718223, 
    "month": "grudzień/ December", 
    "distance_km": 231.72532543347793, 
    "year": 2020, 
    "work_mln_tkm": 4585.54717013607, 
    "mass_mln_ton": 19.788718223
  }, 
  {
    "mass_ton": 17529.255287988002, 
    "month": "styczeń/ January", 
    "distance_km": 232.88473329113756, 
    "year": 2021, 
    "work_mln_tkm": 4082.295942535348, 
    "mass_mln_ton": 17.529255287988
  }, 
  {
    "mass_ton": 17833.339067987, 
    "month": "luty/ February", 
    "distance_km": 220.31889009771777, 
    "year": 2021, 
    "work_mln_tkm": 3929.021470195164, 
    "mass_mln_ton": 17.833339067986998
  }, 
  {
    "mass_ton": 21312.079910651, 
    "month": "marzec/ March", 
    "distance_km": 225.49782072753, 
    "year": 2021, 
    "work_mln_tkm": 4805.827575022773, 
    "mass_mln_ton": 21.312079910650997
  }, 
  {
    "mass_ton": 19928.57902596, 
    "month": "kwiecień/ April", 
    "distance_km": 228.0907964844051, 
    "year": 2021, 
    "work_mln_tkm": 4545.525462833627, 
    "mass_mln_ton": 19.92857902596
  }, 
  {
    "mass_ton": 20418.45578596, 
    "month": "maj/ May", 
    "distance_km": 229.09734231720523, 
    "year": 2021, 
    "work_mln_tkm": 4677.813954784798, 
    "mass_mln_ton": 20.41845578596
  }, 
  {
    "mass_ton": 19798.52003193, 
    "month": "czerwiec/ June", 
    "distance_km": 229.66390981394224, 
    "year": 2021, 
    "work_mln_tkm": 4547.0055190627, 
    "mass_mln_ton": 19.79852003193
  }, 
  {
    "mass_ton": 20723.81228533704, 
    "month": "lipiec/ July", 
    "distance_km": 227.1695957622643, 
    "year": 2021, 
    "work_mln_tkm": 4707.820059513061, 
    "mass_mln_ton": 20.72381228533704
  }, 
  {
    "mass_ton": 21173.30950533729, 
    "month": "sierpień/ July", 
    "distance_km": 230.89726242014058, 
    "year": 2021, 
    "work_mln_tkm": 4888.859201156721, 
    "mass_mln_ton": 21.17330950533729
  }, 
  {
    "mass_ton": 21002.857690040033, 
    "month": "wrzesień/ September", 
    "distance_km": 234.4469108330172, 
    "year": 2021, 
    "work_mln_tkm": 4924.055104095365, 
    "mass_mln_ton": 21.002857690040035
  }, 
  {
    "mass_ton": 22013.888703, 
    "month": "październik/ October", 
    "distance_km": 234.71790133390718, 
    "year": 2021, 
    "work_mln_tkm": 5167.053756566367, 
    "mass_mln_ton": 22.013888703
  }, 
  {
    "mass_ton": 21389.899844, 
    "month": "listopad/ November", 
    "distance_km": 232.69845582861038, 
    "year": 2021, 
    "work_mln_tkm": 4977.396664027433, 
    "mass_mln_ton": 21.389899844
  }, 
  {
    "mass_ton": 20509.114873, 
    "month": "grudzień/ December", 
    "distance_km": 230.8285153213416, 
    "year": 2021, 
    "work_mln_tkm": 4734.088536689435, 
    "mass_mln_ton": 20.509114872999998
  }, 
  {
    "mass_ton": 19646.805991999998, 
    "month": "styczeń/ January", 
    "distance_km": 234.1069218765452, 
    "year": 2022, 
    "work_mln_tkm": 4599.453275492783, 
    "mass_mln_ton": 19.646805991999997
  }, 
  {
    "mass_ton": 19812.193558471994, 
    "month": "luty/ February", 
    "distance_km": 229.69316541503892, 
    "year": 2022, 
    "work_mln_tkm": 4550.7254522608755, 
    "mass_mln_ton": 19.812193558471993
  }, 
  {
    "mass_ton": 22831.95439915799, 
    "month": "marzec/ March", 
    "distance_km": 240.19827296631638, 
    "year": 2022, 
    "work_mln_tkm": 5484.196015123439, 
    "mass_mln_ton": 22.83195439915799
  }, 
  {
    "mass_ton": 21273.941928879998, 
    "month": "kwiecień/ April", 
    "distance_km": 246.3955516038999, 
    "year": 2022, 
    "work_mln_tkm": 5241.804656355722, 
    "mass_mln_ton": 21.27394192888
  }, 
  {
    "mass_ton": 21188.169325028004, 
    "month": "maj/ May", 
    "distance_km": 255.6379998680561, 
    "year": 2022, 
    "work_mln_tkm": 5416.501227115859, 
    "mass_mln_ton": 21.188169325028003
  }, 
  {
    "mass_ton": 20371.86417802, 
    "month": "czerwiec/ June", 
    "distance_km": 262.15582376976556, 
    "year": 2022, 
    "work_mln_tkm": 5340.602835314611, 
    "mass_mln_ton": 20.37186417802
  }, 
  {
    "mass_ton": 20925.645923000004, 
    "month": "lipiec/ July", 
    "distance_km": 256.72176098515456, 
    "year": 2022, 
    "work_mln_tkm": 5372.068671104381, 
    "mass_mln_ton": 20.925645923000005
  }, 
  {
    "mass_ton": 20874.328799147992, 
    "month": "sierpień/ August", 
    "distance_km": 256.72467917976644, 
    "year": 2022, 
    "work_mln_tkm": 5358.955364054228, 
    "mass_mln_ton": 20.874328799147992
  }, 
  {
    "mass_ton": 20463.074779108993, 
    "month": "wrzesień/ September", 
    "distance_km": 257.1217720270025, 
    "year": 2022, 
    "work_mln_tkm": 5261.5020483255685, 
    "mass_mln_ton": 20.463074779108993
  }, 
  {
    "mass_ton": 21264.33331990544, 
    "month": "październik/ October", 
    "distance_km": 257.99262552945856, 
    "year": 2022, 
    "work_mln_tkm": 5486.041183335953, 
    "mass_mln_ton": 21.26433331990544
  }, 
  {
    "mass_ton": 20948.636272384996, 
    "month": "listopad/ November", 
    "distance_km": 260.7559165187338, 
    "year": 2022, 
    "work_mln_tkm": 5462.480851023341, 
    "mass_mln_ton": 20.948636272384995
  }, 
  {
    "mass_ton": 18941.106809575, 
    "month": "grudzień/ December", 
    "distance_km": 260.01837856045967, 
    "year": 2022, 
    "work_mln_tkm": 4925.035880766172, 
    "mass_mln_ton": 18.941106809575
  }, 
  {
    "mass_ton": 20418.300266093993, 
    "month": "styczeń/ January", 
    "distance_km": 265.3082404128235, 
    "year": 2023, 
    "work_mln_tkm": 5417.1433158180835, 
    "mass_mln_ton": 20.418300266093993
  }, 
  {
    "mass_ton": 19049.49140217599, 
    "month": "luty/ February", 
    "distance_km": 269.0617808556699, 
    "year": 2023, 
    "work_mln_tkm": 5125.490081064245, 
    "mass_mln_ton": 19.049491402175992
  }, 
  {
    "mass_ton": 21080.71658412399, 
    "month": "marzec/ March", 
    "distance_km": 261.53845930615677, 
    "year": 2023, 
    "work_mln_tkm": 5513.418136481537, 
    "mass_mln_ton": 21.08071658412399
  }, 
  {
    "mass_ton": 18041.020340712996, 
    "month": "kwiecień/ April", 
    "distance_km": 270.68791836067106, 
    "year": 2023, 
    "work_mln_tkm": 4883.486241130126, 
    "mass_mln_ton": 18.041020340712997
  }, 
  {
    "mass_ton": 18599.156230626, 
    "month": "maj/ May", 
    "distance_km": 267.15553490912583, 
    "year": 2023, 
    "work_mln_tkm": 4968.867531651289, 
    "mass_mln_ton": 18.599156230625997
  }, 
  {
    "mass_ton": 18080.771496096993, 
    "month": "czerwiec/ June", 
    "distance_km": 271.8843097268489, 
    "year": 2023, 
    "work_mln_tkm": 4915.878077545217, 
    "mass_mln_ton": 18.080771496096993
  }, 
  {
    "mass_ton": 18649.397569097, 
    "month": "lipiec/ July", 
    "distance_km": 273.1602187509731, 
    "year": 2023, 
    "work_mln_tkm": 5094.273519548403, 
    "mass_mln_ton": 18.649397569097
  }, 
  {
    "mass_ton": 19205.520057999995, 
    "month": "sierpień/ August", 
    "distance_km": 265.59087208845506, 
    "year": 2023, 
    "work_mln_tkm": 5100.8108211165345, 
    "mass_mln_ton": 19.205520057999994
  }, 
  {
    "mass_ton": 19760.90908675, 
    "month": "wrzesień/ September", 
    "distance_km": 264.7981063079812, 
    "year": 2023, 
    "work_mln_tkm": 5232.651305095578, 
    "mass_mln_ton": 19.76090908675
  }, 
  {
    "mass_ton": 21020.594412991002, 
    "month": "październik/ October", 
    "distance_km": 263.1821304340587, 
    "year": 2023, 
    "work_mln_tkm": 5532.244820601244, 
    "mass_mln_ton": 21.020594412991002
  }, 
  {
    "mass_ton": 20021.547635535004, 
    "month": "listopad/ November", 
    "distance_km": 259.9954055417229, 
    "year": 2023, 
    "work_mln_tkm": 5205.510397073846, 
    "mass_mln_ton": 20.021547635535004
  }, 
  {
    "mass_ton": 17681.47327917375, 
    "month": "grudzień/ December", 
    "distance_km": 260.7967885310685, 
    "year": 2023, 
    "work_mln_tkm": 4611.2714477064155, 
    "mass_mln_ton": 17.68147327917375
  }, 
  {
    "mass_ton": 17700.946394016002, 
    "month": "styczeń/ January", 
    "distance_km": 251.79798452355362, 
    "year": 2024, 
    "work_mln_tkm": 4457.062626172694, 
    "mass_mln_ton": 17.700946394016004
  }, 
  {
    "mass_ton": 17795.720489908, 
    "month": "luty/ February", 
    "distance_km": 260.71949576839614, 
    "year": 2024, 
    "work_mln_tkm": 4639.69127296413, 
    "mass_mln_ton": 17.795720489908
  }, 
  {
    "mass_ton": 18674.066436834997, 
    "month": "marzec/ March", 
    "distance_km": 265.1199043807246, 
    "year": 2024, 
    "work_mln_tkm": 4950.866708132994, 
    "mass_mln_ton": 18.674066436835
  }, 
  {
    "mass_ton": 18845.289656559005, 
    "month": "kwiecień/ April", 
    "distance_km": 267.1617050036511, 
    "year": 2024, 
    "work_mln_tkm": 5034.739715933974, 
    "mass_mln_ton": 18.845289656559004
  }, 
  {
    "mass_ton": 18688.615639850825, 
    "month": "maj/ May", 
    "distance_km": 269.14790951772517, 
    "year": 2024, 
    "work_mln_tkm": 5030.001831246113, 
    "mass_mln_ton": 18.688615639850823
  }, 
  {
    "mass_ton": 18905.985868824995, 
    "month": "czerwiec/ June", 
    "distance_km": 264.82350972354914, 
    "year": 2024, 
    "work_mln_tkm": 5006.749532566059, 
    "mass_mln_ton": 18.905985868824995
  }, 
  {
    "mass_ton": 19025.17639007599, 
    "month": "lipiec/ July", 
    "distance_km": 264.8048060444118, 
    "year": 2024, 
    "work_mln_tkm": 5037.958143934797, 
    "mass_mln_ton": 19.02517639007599
  }, 
  {
    "mass_ton": 18895.211376458, 
    "month": "sierpień/ August", 
    "distance_km": 265.0649410160643, 
    "year": 2024, 
    "work_mln_tkm": 5008.458088986907, 
    "mass_mln_ton": 18.895211376458
  }, 
  {
    "mass_ton": 17940.0017490312, 
    "month": "wrzesień/ September", 
    "distance_km": 260.9377148867146, 
    "year": 2024, 
    "work_mln_tkm": 4681.223061455864, 
    "mass_mln_ton": 17.940001749031197
  }, 
  {
    "mass_ton": 20032.262247578998, 
    "month": "październik/ October", 
    "distance_km": 254.98043267904796, 
    "year": 2024, 
    "work_mln_tkm": 5107.834895427851, 
    "mass_mln_ton": 20.032262247579
  }, 
  {
    "mass_ton": 18913.028278245998, 
    "month": "listopad/ November", 
    "distance_km": 254.53975581505665, 
    "year": 2024, 
    "work_mln_tkm": 4814.117599667999, 
    "mass_mln_ton": 18.913028278246
  }, 
  {
    "mass_ton": 18056.878065614, 
    "month": "grudzień/ December", 
    "distance_km": 248.79773717636397, 
    "year": 2024, 
    "work_mln_tkm": 4492.510403194284, 
    "mass_mln_ton": 18.056878065614
  }, 
  {
    "mass_ton": 17593.158355109, 
    "month": "styczeń/ January", 
    "distance_km": 251.39116369767703, 
    "year": 2025, 
    "work_mln_tkm": 4422.7645520083615, 
    "mass_mln_ton": 17.593158355109
  }, 
  {
    "mass_ton": 16663.559708602, 
    "month": "luty/ February", 
    "distance_km": 254.1386153837176, 
    "year": 2025, 
    "work_mln_tkm": 4234.853991708016, 
    "mass_mln_ton": 16.663559708601998
  }, 
  {
    "mass_ton": 17941.027171898997, 
    "month": "marzec/ March", 
    "distance_km": 259.83538795466166, 
    "year": 2025, 
    "work_mln_tkm": 4661.713755515503, 
    "mass_mln_ton": 17.941027171898998
  }, 
  {
    "mass_ton": 17232.229195492997, 
    "month": "kwiecień/ April", 
    "distance_km": 260.3791562910467, 
    "year": 2025, 
    "work_mln_tkm": 4486.913298936409, 
    "mass_mln_ton": 17.232229195492998
  }, 
  {
    "mass_ton": 18032.898365719004, 
    "month": "maj/ May", 
    "distance_km": 258.97388906068323, 
    "year": 2025, 
    "work_mln_tkm": 4670.049820806289, 
    "mass_mln_ton": 18.032898365719003
  }, 
  {
    "mass_ton": 17510.954717808996, 
    "month": "czerwiec/ June", 
    "distance_km": 257.59677296894813, 
    "year": 2025, 
    "work_mln_tkm": 4510.765426912975, 
    "mass_mln_ton": 17.510954717808996
  }, 
  {
    "mass_ton": 18769.865863273997, 
    "month": "lipiec/ July", 
    "distance_km": 260.78467377047417, 
    "year": 2025, 
    "work_mln_tkm": 4894.893345869468, 
    "mass_mln_ton": 18.769865863273996
  }, 
  {
    "mass_ton": 18147.933338945, 
    "month": "sierpień/ August", 
    "distance_km": 262.7457044052598, 
    "year": 2025, 
    "work_mln_tkm": 4768.291528640803, 
    "mass_mln_ton": 18.147933338945002
  }, 
  {
    "mass_ton": 18684.005306853996, 
    "month": "wrzesień/ September", 
    "distance_km": 257.9943902933577, 
    "year": 2025, 
    "work_mln_tkm": 4820.3685573796565, 
    "mass_mln_ton": 18.684005306853997
  }, 
  {
    "mass_ton": 20367.688821842006, 
    "month": "październik/ October", 
    "distance_km": 258.1150498487572, 
    "year": 2025, 
    "work_mln_tkm": 5257.207015553724, 
    "mass_mln_ton": 20.367688821842005
  }, 
  {
    "mass_ton": 18954.366003896004, 
    "month": "listopad/ November", 
    "distance_km": 258.50162684188626, 
    "year": 2025, 
    "work_mln_tkm": 4899.734447763661, 
    "mass_mln_ton": 18.954366003896006
  }, 
  {
    "mass_ton": 17872.031379404, 
    "month": "grudzień/ December", 
    "distance_km": 256.7269675514646, 
    "year": 2025, 
    "work_mln_tkm": 4588.232420019009, 
    "mass_mln_ton": 17.872031379404
  }
];