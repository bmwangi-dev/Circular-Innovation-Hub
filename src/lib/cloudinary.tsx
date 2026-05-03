import { useMemo, useState, type ImgHTMLAttributes, type SyntheticEvent } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto, fit as resizeFit } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "ddk4dqftp",
  },
});

type DeliveryType = "upload" | "fetch";
type ResizeMode = "cover" | "contain";

type OptimizedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  publicId?: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  resizeMode?: ResizeMode;
  deliveryType?: DeliveryType;
};

const getOptimizedImage = (
  publicId: string,
  width?: number,
  height?: number,
  resizeMode: ResizeMode = "cover",
  deliveryType: DeliveryType = "upload"
) => {
  const image = cld.image(publicId).format("auto").quality("auto");

  if (deliveryType !== "upload") {
    image.setDeliveryType(deliveryType);
  }

  if (width && height) {
    image.resize(
      resizeMode === "cover"
        ? auto().gravity(autoGravity()).width(width).height(height)
        : resizeFit().width(width).height(height)
    );
  } else if (width) {
    image.resize(resizeFit().width(width));
  }

  return image;
};

export const OptimizedImage = ({
  publicId,
  fallbackSrc,
  width,
  height,
  resizeMode = "cover",
  deliveryType = "upload",
  onError,
  ...imageProps
}: OptimizedImageProps) => {
  const [useFallback, setUseFallback] = useState(false);

  const optimizedImage = useMemo(
    () =>
      publicId
        ? getOptimizedImage(publicId, width, height, resizeMode, deliveryType)
        : null,
    [deliveryType, height, publicId, resizeMode, width]
  );

  if ((!optimizedImage || useFallback) && fallbackSrc) {
    return <img src={fallbackSrc} width={width} height={height} {...imageProps} />;
  }

  if (!optimizedImage) {
    return null;
  }

  return (
    <AdvancedImage
      cldImg={optimizedImage}
      width={width}
      height={height}
      onError={(event: SyntheticEvent<HTMLImageElement, Event>) => {
        if (fallbackSrc) {
          setUseFallback(true);
        }

        onError?.(event);
      }}
      {...imageProps}
    />
  );
};
