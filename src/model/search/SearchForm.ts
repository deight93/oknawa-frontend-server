import { SearchState } from '@/jotai/global/store';
import { SearchFormType } from '@/services/search/types';

export default class SearchForm {
  static convertToRequestBody(searchForm: SearchState[]) {
    return {
      participant: searchForm?.map(
        ({ name, address: { latitude, longitude, regionName, fullAddress } }) => ({
          name,
          start_x: longitude,
          start_y: latitude,
          full_address: fullAddress,
          region_name: regionName,
        }),
      ),
    };
  }
}
