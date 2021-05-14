<template> 
<div>
<div class="theme-page-section theme-page-section-gray theme-page-section-lg">
      <div class="container">
        <div class="row">
          <div class="col-md-2-5 ">
            
            <SideNav />

          </div>
          <div class="col-md-9-5 ">
            <h1 class="theme-account-page-title">Booking History</h1>
            <div class="theme-account-history">
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="theme-account-history-type">
                      <i class="fa fa-home theme-account-history-type-icon"></i>
                    </td>
                    <td>
                      <p class="theme-account-history-type-title">Jolie petit studio Paris 11</p>
                      <a class="theme-account-history-item-name" href="#">Vacation rental</a>
                    </td>
                    <td>
                      <a href="#">Paris, France</a>
                    </td>
                    <td class="theme-account-history-tr-date">
                      <p class="theme-account-history-date">Sep 23, 2017 — Sep 25, 2017</p>
                    </td>
                    <td>
                      <p class="theme-account-history-item-price">$318.30</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="theme-account-history-type">
                      <i class="fa fa-glass theme-account-history-type-icon"></i>
                    </td>
                    <td>
                      <p class="theme-account-history-type-title">See London By Night Bus Tour</p>
                      <a class="theme-account-history-item-name" href="#">Experience</a>
                    </td>
                    <td>
                      <a href="#">London, United Kindom</a>
                    </td>
                    <td class="theme-account-history-tr-date">
                      <p class="theme-account-history-date">Jun 15, 2017</p>
                    </td>
                    <td>
                      <p class="theme-account-history-item-price">$348.73</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


</div>    

</template>

<script>
import SideNav from '../../../components/account/SideNav.vue'
export default {
  components: { SideNav },

    middleware: 'auth'

}
</script>

<style>

.theme-page-section-lg {
    padding: 100px 0;
}

</style>